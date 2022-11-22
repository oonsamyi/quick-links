import { SyntheticEvent, useCallback } from 'react'

interface IParams<E> {
  handler?: Handler<E>
  preventDefault?: boolean
  stopPropagation?: boolean
}

type Handler<E> = (event: E) => void

export function usePreventedHandler<E extends SyntheticEvent = SyntheticEvent>({
  handler = () => {},
  preventDefault = false,
  stopPropagation = false,
}: IParams<E>): Handler<E> {
  return useCallback(
    (event: E) => {
      if (preventDefault) event.preventDefault()
      if (stopPropagation) event.stopPropagation()

      handler(event)
    },
    [preventDefault, stopPropagation, handler],
  )
}
