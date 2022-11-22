interface Props {
  children: React.ReactNode
}

export function Layout({ children }: Props) {
  return (
    <div className="layout">
      {children}

      <style jsx>{`
        .layout {
          padding: 20px;
          min-height: 100vh;
          min-width: 320px;
          max-width: 544px;
          margin: auto;
        }
      `}</style>
    </div>
  )
}
