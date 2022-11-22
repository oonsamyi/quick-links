interface Props {
  children: React.ReactNode
}

export function ItemWrapper({ children }: Props) {
  return (
    <div className="wrapper">
      {children}

      <style jsx>{`
        .wrapper + .wrapper {
          margin-top: 10px;
        }
      `}</style>
    </div>
  )
}
