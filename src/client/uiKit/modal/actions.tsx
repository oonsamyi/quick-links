import { StyledProps, useStyle } from 'src/client/hooks/useStyle'

interface Props extends StyledProps {
  children: React.ReactNode
}

export const ModalActions = ({ children, ...styledProps }: Props) => {
  const style = useStyle(styledProps, { mt: 20 })

  return (
    <div className="actions" style={style}>
      {children}

      <style jsx>{`
        .actions {
          display: flex;
          justify-content: flex-end;
        }
      `}</style>
    </div>
  )
}
