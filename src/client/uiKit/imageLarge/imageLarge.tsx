import NextImage from 'next/image'
import { StyledProps, useStyle } from 'src/client/hooks/useStyle'
import { EmptyImageIcon } from 'src/client/icons/emptyImage'

interface Props extends StyledProps {
  src?: string
  width?: number
  height?: number
  priority?: boolean
  placeholderUrl?: string
}

export function ImageLarge({
  src,
  width,
  height,
  priority,
  placeholderUrl,
  ...styledProps
}: Props) {
  const style = useStyle(styledProps)

  const size = {
    width: width || '100%',
    height: height || 150,
  }

  return (
    <>
      {!src && (
        <div className="emptyImage" style={{ ...style, ...size }}>
          <EmptyImageIcon size={38} color="#A0A0A0" />
        </div>
      )}

      {src && (
        <div className="image" style={{ ...style, ...size }}>
          <NextImage
            src={src}
            priority={priority}
            layout="fill"
            objectFit="cover"
            {...(placeholderUrl && {
              placeholder: 'blur',
              blurDataURL: placeholderUrl,
            })}
          />
        </div>
      )}

      <style jsx>{`
        .emptyImage,
        .image {
          border-radius: 9px;
        }

        .emptyImage {
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: #f0f0f3;
        }

        .image {
          position: relative;
          overflow: hidden;
        }
      `}</style>
    </>
  )
}
