import { Logo } from 'src/client/uiKit/logo'
import { StyledProps, useStyle } from 'src/client/hooks/useStyle'
import { Link } from '../uiKit/link'
import { header } from '../constants/ui'

export function Header(styledProps: StyledProps) {
  const style = useStyle(styledProps, defaultStyledProps)

  return (
    <div className="header" style={style}>
      <Link href="/" mr={10}>
        <Logo />
      </Link>

      <style jsx>{`
        .header {
          height: ${header.height}px;
        }
      `}</style>

      <style jsx>{`
        .header {
          display: flex;
          align-items: center;
        }
      `}</style>
    </div>
  )
}

const defaultStyledProps = {
  mb: header.marginBottom,
}
