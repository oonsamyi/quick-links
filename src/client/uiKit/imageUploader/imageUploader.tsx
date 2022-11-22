import Image from 'next/image'
import { useCallback } from 'react'
import classNames from 'classnames'
import { StyledProps, useStyle } from 'src/client/hooks/useStyle'
import { Text } from '../typography/text'
import PhotoIcon from './icons/photo.svg'
import TrashIcon from './icons/trash.svg'
import { LazyLoader } from '../lazyLoader'
import { Spinner } from '../spinner/spinner'

interface Props extends StyledProps {
  imageUrl: string | null
  disabled?: boolean
  loading?: boolean
  priority?: boolean
  accept?: string
  placeholderUrl?: string
  onUploadClick(image: File): void
  onRemoveClick(): void
  onUploadingComplete(): void
}

export function ImageUploader({
  imageUrl,
  disabled,
  loading,
  priority,
  accept,
  placeholderUrl,
  onUploadClick,
  onRemoveClick,
  onUploadingComplete,
  ...styledProps
}: Props) {
  const style = useStyle(styledProps)

  const handleUploadClick = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const image = event.target.files?.[0]

      if (image) onUploadClick(image)
    },
    [onUploadClick],
  )

  return (
    <>
      {imageUrl && (
        <div
          style={style}
          className={classNames('imageWrapper', disabled && 'disabled')}
        >
          <Image
            src={imageUrl}
            priority={priority}
            layout="fill"
            objectFit="cover"
            onLoadingComplete={onUploadingComplete}
            {...(placeholderUrl && {
              placeholder: 'blur',
              blurDataURL: placeholderUrl,
            })}
          />

          {!disabled && (
            <div className="deleteTitle" onClick={onRemoveClick}>
              <TrashIcon />

              <Text size="XS" mt={6} color="#cecfd6">
                Delete photo
              </Text>
            </div>
          )}
        </div>
      )}

      {!imageUrl && (
        <label style={style}>
          <input
            type="file"
            className="input"
            disabled={disabled || loading}
            accept={accept}
            onChange={handleUploadClick}
          />

          <div
            className={classNames(
              'upload',
              disabled && 'disabled',
              loading && 'loading',
            )}
          >
            <LazyLoader
              loading={!!loading}
              loader={
                <div className="loader">
                  <Spinner theme="gray" size={20} />

                  <Text size="XS" mt={6} color="#a0a0a0">
                    Photo is uploading
                  </Text>
                </div>
              }
            >
              <div className="uploadTitle">
                <PhotoIcon />

                <Text size="XS" mt={6} color="#a0a0a0">
                  Add photo
                </Text>
              </div>
            </LazyLoader>
          </div>
        </label>
      )}

      <style jsx>{`
        .input {
          display: none;
        }

        .imageWrapper,
        .upload {
          width: 100%;
          height: 150px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px dashed #cecfd6;
          border-radius: 9px;
          cursor: pointer;
        }

        .imageWrapper {
          position: relative;
          overflow: hidden;
        }

        .imageWrapper.disabled,
        .upload.disabled,
        .upload.loading {
          cursor: not-allowed;
        }

        .imageWrapper::after {
          content: '';
          width: 100%;
          height: 100%;
          z-index: 1;
          border-radius: 9px;
          transition: background-color 0.3s ease;
        }

        .imageWrapper:not(.disabled):hover::after {
          cursor: default;
          background-color: rgba(0, 0, 0, 0.4);
        }

        .deleteTitle,
        .uploadTitle,
        .loader {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .deleteTitle {
          cursor: pointer;
          position: absolute;
          top: 50%;
          left: 50%;
          z-index: 2;
          transform: translate(-50%, -50%);
        }

        .imageWrapper:not(:hover) .deleteTitle {
          display: none;
        }
      `}</style>
    </>
  )
}
