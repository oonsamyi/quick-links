import { MutableRefObject, useRef } from 'react'

export function useActualRef<T>(value: T): MutableRefObject<T> {
  const ref = useRef(value)

  ref.current = value

  return ref
}
