import { useCallback } from 'react'

export function useForkRef<T>(
  ...refs: React.ForwardedRef<T>[]
): React.RefCallback<T> {
  return useCallback(
    (element) =>
      refs.forEach((ref) => {
        if (!ref) return
        if (typeof ref === 'function') ref(element)
        else ref.current = element
      }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    refs,
  )
}
