import { useEffect, useRef, useState } from 'react'

export interface Props {
  loading: boolean
  loader: React.ReactNode
  children: React.ReactNode
}

export function LazyLoader({ loading, loader, children }: Props) {
  const [showLoader, setShowLoader] = useState(false)

  const timeoutIdRef = useRef<number | null>(null)

  useEffect(() => {
    const clearTimeout = () => {
      if (timeoutIdRef.current) {
        window.clearTimeout(timeoutIdRef.current)
        timeoutIdRef.current = null
      }
    }

    if (!loading) {
      setShowLoader(false)
      clearTimeout()
      return
    }

    timeoutIdRef.current = window.setTimeout(() => {
      setShowLoader(true)
    }, 250)

    return clearTimeout
  }, [loading])

  if (showLoader) return <>{loader}</>
  return <>{children}</>
}
