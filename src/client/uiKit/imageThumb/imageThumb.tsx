import { useEffect, useState } from 'react'
import { StyledProps, useStyle } from 'src/client/hooks/useStyle'
import { EmptyImageIcon } from 'src/client/icons/emptyImage'

interface Props extends StyledProps {
  src?: string
  size?: number
  placeholderUrl?: string
}

export function ImageThumb({
  src,
  size = 48,
  placeholderUrl,
  ...styledProps
}: Props) {
  const style = useStyle(styledProps)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    if (!src) return

    const handleLoad = () => {
      setLoading(false)
    }

    const handleError = () => {
      setLoading(false)
      setError(true)
    }

    const image = new Image()

    image.addEventListener('load', handleLoad)
    image.addEventListener('error', handleError)
    image.addEventListener('abort', handleError)

    image.src = src

    return () => {
      image.removeEventListener('load', handleLoad)
      image.removeEventListener('error', handleError)
      image.removeEventListener('abort', handleError)
    }
  }, [src])

  return (
    <>
      {loading && <div className="loader" style={style} />}

      {error && (
        <div className="emptyImage" style={style}>
          <EmptyImageIcon size={size * 0.5} color="#A0A0A0" />
        </div>
      )}

      {!loading && !error && <img src={src} style={style} className="image" />}

      <style jsx>{`
        .emptyImage,
        .loader,
        .image {
          width: ${size}px;
          height: ${size}px;
        }
      `}</style>

      <style jsx>{`
        .emptyImage,
        .loader,
        .image {
          display: flex;
          flex-shrink: 0;
          border-radius: 50%;
        }

        .emptyImage {
          align-items: center;
          justify-content: center;
          background-color: #f0f0f3;
        }

        .loader {
          animation-name: shimmer;
          animation-duration: 1s;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
          background-repeat: no-repeat;
          background-size: 50% 100%;
          background-color: rgba(240, 240, 243, 1);
          background-image: linear-gradient(
            90deg,
            rgba(240, 240, 243, 1) 0%,
            rgba(226, 226, 226, 1) 50%,
            rgba(240, 240, 243, 1) 100%
          );
        }

        @keyframes shimmer {
          0% {
            background-position-x: -100%;
          }

          50% {
            background-position-x: 200%;
          }

          100% {
            /* Значение такое же, как у предыдущего шага, чтобы сымитировать задержку между итерациями анимации */
            background-position-x: 200%;
          }
        }

        .image {
          object-fit: cover;
        }
      `}</style>
    </>
  )
}
