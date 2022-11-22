import classNames from 'classnames'
import NextLink, { LinkProps } from 'next/link'
import { useCallback } from 'react'
import { usePreventedHandler } from 'src/client/hooks/usePreventedHandler'
import {
  extractStyledProps,
  StyledProps,
  useStyle,
} from 'src/client/hooks/useStyle'

interface Props extends LinkProps, StyledProps {
  id?: string
  children: React.ReactNode
  stopPropagation?: boolean
  preventDefault?: boolean
  asText?: boolean
  target?: '_blank' | '_self'
  // нужен для корректной обводки outline
  borderRadius?: number
  onClick?(event: React.MouseEvent): void
}

export function Link(props: Props) {
  const { children, ...restProps } = props
  const [styledProps, linkProps] = extractStyledProps(restProps)
  const {
    id,
    stopPropagation = false,
    preventDefault = false,
    asText = false,
    target = '_self',
    borderRadius,
    onClick = () => {},
    ...nextProps
  } = linkProps

  const style = useStyle(styledProps)

  const preventedClick = usePreventedHandler({
    handler: onClick,
    stopPropagation,
    preventDefault,
  })

  const handleClick = useCallback(
    (event: React.MouseEvent) => {
      const selection = window.getSelection()

      // При выделении текста ссылки превентим переход по ней
      if (selection && selection.toString()) {
        event.preventDefault()
        return
      }

      preventedClick(event)
    },
    [preventedClick],
  )

  return (
    <>
      <NextLink {...nextProps}>
        <a
          id={id}
          draggable={false}
          style={{ ...style, borderRadius }}
          target={target}
          className={classNames('link', asText && 'asText')}
          onClick={handleClick}
        >
          {children}
        </a>
      </NextLink>

      <style jsx>{`
        .link {
          user-select: text;
        }

        .link.asText {
          color: rgb(4, 104, 255);
          display: inline-block;
        }

        .link.asText:hover {
          color: rgba(4, 104, 255, 0.7);
        }
      `}</style>
    </>
  )
}
