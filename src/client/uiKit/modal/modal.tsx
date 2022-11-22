import { useCallback } from 'react'
import { ModalActions } from './actions'
import { ModalTitle } from './title'

export interface ModalProps {
  width?: number
  children: React.ReactNode
  onClose(): void
}

export function Modal({ width = 500, children, onClose }: ModalProps) {
  const handleClose = useCallback(
    (event: React.MouseEvent) => {
      if (event.target === event.currentTarget) onClose()
    },
    [onClose],
  )

  return (
    <div className="overlay" onMouseDown={handleClose}>
      <div className="modal">{children}</div>

      <style jsx global>{`
        body {
          overflow: hidden !important;
        }
      `}</style>

      <style jsx>{`
        .overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.4);
        }

        .modal {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          max-width: calc(100vw - 2 * 10px);
          max-height: calc(100vh - 2 * 10px);
          border-radius: 6px;
          padding: 20px;
          background-color: white;
        }
      `}</style>

      <style jsx>{`
        .modal {
          width: ${width}px;
        }
      `}</style>
    </div>
  )
}

Modal.Title = ModalTitle
Modal.Actions = ModalActions
