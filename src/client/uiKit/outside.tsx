import { cloneElement, useEffect, useMemo, useRef } from 'react'
import { useActualRef } from 'src/client/hooks/useActualRef'
import { useForkRef } from 'src/client/hooks/useForkRef'

export interface Props {
  active?: boolean
  children: React.ReactElement
  onOutsideClick(): void
}

export function Outside(props: Props) {
  const { children } = props

  const childrenRef = useRef<HTMLElement | null>(null)

  // не перезаписываем реф, который может быть установлен на children во внешнем компоненте
  const forkedRef = useForkRef(childrenRef, (children as any).ref)

  /* Создаем ссылку на props, чтобы useEffect не переподписывался каждый раз,
     когда меняются active или onOutsideClick */
  const propsRef = useActualRef<Props>(props)

  const clonedChildren = useMemo(
    () => cloneElement(children, { ref: forkedRef }),
    [children, forkedRef],
  )

  useEffect(() => {
    const handleDocumentClick = (event: MouseEvent) => {
      const { active, onOutsideClick } = propsRef.current
      const childElement = childrenRef.current

      if (!active || !childElement) return

      const insideClick = childElement.contains(event.target as HTMLElement)

      if (!insideClick) onOutsideClick()
    }

    document.addEventListener('mousedown', handleDocumentClick)

    return () => {
      document.removeEventListener('mousedown', handleDocumentClick)
    }
    // propsRef никогда не меняется, нужен здесь только для подавления ошибки линтера
  }, [propsRef])

  return clonedChildren
}

Outside.defaultProps = {
  active: true,
}
