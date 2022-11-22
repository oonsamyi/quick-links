import { useEffect, useRef, useState } from 'react'
import {
  tabsMarginBottom,
  tabsMarginBetween,
  tabsHeight,
  tabsPaddingX,
} from './constants'
import { NavigatorContext } from './navigator.context'
import { NavigatorActions, NavigatorRefs, NavigatorState } from './types'

interface Params {
  initialSectionId: string | null
  children: React.ReactNode
}

export function NavigatorProvider({ children, initialSectionId }: Params) {
  const [selectedSection, setSelectedSection] = useState<string | null>(
    initialSectionId,
  )
  const [isTabsSticky, setIsTabsSticky] = useState(false)

  const intersectionEnabled = useRef(true)
  const tabsRef = useRef<HTMLDivElement>(null)
  const enableIntersectionTimeoutIdRef = useRef<number | null>(null)
  const unsubscribeSection = useRef<Record<string, () => void>>({})

  const getTabId = (sectionId: string): string => {
    return `tab-${sectionId}`
  }

  const scrollToTab = (sectionId: string) => {
    const tab = document.getElementById(getTabId(sectionId))

    if (!tab || !tab.parentElement) return

    const parentRect = tab.parentElement.getBoundingClientRect()
    const tabRect = tab.getBoundingClientRect()

    if (tabRect.left < parentRect.left || tabRect.right > parentRect.right) {
      const isFirstTab = tab.parentElement.firstChild === tab
      const offset = isFirstTab ? tabsPaddingX : tabsMarginBetween

      tab.parentElement.scrollBy({
        left: tabRect.left - parentRect.left - offset,
        behavior: 'smooth',
      })
    }
  }

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)

    if (!section) return

    if (enableIntersectionTimeoutIdRef.current) {
      window.clearTimeout(enableIntersectionTimeoutIdRef.current)
      enableIntersectionTimeoutIdRef.current = null
    }

    intersectionEnabled.current = false

    const sectionRect = section.getBoundingClientRect()
    const offset = tabsMarginBottom + tabsHeight

    // Ждем окончания скролла страницы
    enableIntersectionTimeoutIdRef.current = window.setTimeout(() => {
      intersectionEnabled.current = true
    }, 1000)

    window.scrollBy({
      top: sectionRect.top - offset,
      behavior: 'smooth',
    })
  }

  const selectSection = (sectionId: string) => {
    setSelectedSection(sectionId)
    scrollToTab(sectionId)
    scrollToSection(sectionId)
  }

  const registerSection = (
    section: HTMLDivElement | null,
    sectionId: string,
  ) => {
    if (!section) {
      const unsubscribe = unsubscribeSection.current[sectionId]

      if (unsubscribe) {
        unsubscribe()
        delete unsubscribeSection.current[sectionId]
      }

      return
    }

    const sectionObserver = new IntersectionObserver(
      ([entry]) => {
        if (
          entry.isIntersecting &&
          intersectionEnabled.current &&
          sectionId !== selectedSection
        ) {
          setSelectedSection(sectionId)
          scrollToTab(sectionId)
        }
      },
      {
        threshold: 0,
        rootMargin: '-30% 0px -70% 0px',
      },
    )

    sectionObserver.observe(section)

    unsubscribeSection.current[sectionId] = () => {
      sectionObserver.unobserve(section)
    }
  }

  useEffect(() => {
    const tabs = tabsRef.current

    if (!tabs) return

    const wheelHandler = (event: WheelEvent) => {
      event.preventDefault()

      tabs.scrollBy({
        left: event.deltaY * 1.5,
        behavior: 'smooth',
      })
    }

    tabs.addEventListener('wheel', wheelHandler)

    return () => {
      tabs.removeEventListener('wheel', wheelHandler)
    }
  }, [])

  useEffect(() => {
    const tabs = tabsRef.current

    if (!tabs) return

    const tabsObserver = new IntersectionObserver(
      ([entry]) => {
        const sticky = entry.intersectionRatio < 1

        setIsTabsSticky(sticky)
      },
      { threshold: 1 },
    )

    tabsObserver.observe(tabs)

    return () => {
      tabsObserver.unobserve(tabs)
    }
  }, [])

  useEffect(() => {
    // При возвращении в меню со сраницы блюда скролл восстанавливается некорректно.
    // Это проблема sticky табов (без них все ок). Значение top: -21 выявлено эмпирическим путем
    window.scrollBy({ top: -21 })
  }, [])

  const state: NavigatorState = {
    tabId: getTabId,
    selectedSection,
    isTabsSticky,
  }

  const actions: NavigatorActions = {
    selectSection,
    registerSection,
  }

  const refs: NavigatorRefs = {
    tabs: tabsRef,
  }

  const context = {
    state,
    actions,
    refs,
  }

  return (
    <NavigatorContext.Provider value={context}>
      {children}
    </NavigatorContext.Provider>
  )
}
