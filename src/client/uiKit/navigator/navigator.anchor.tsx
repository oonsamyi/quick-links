import { StyledProps } from 'src/client/hooks/useStyle'
import { Link } from '../link'
import { useNavigatorContext } from './navigator.context'
import AnchorIcon from './icons/anchor.svg'
import { ReactNode } from 'react'

interface Props extends StyledProps {
  sectionId: string
  title: ReactNode
}

export function NavigatorAnchor({ sectionId, title, ...styledProps }: Props) {
  const { actions } = useNavigatorContext()

  return (
    <>
      <Link
        display="block"
        href={`#${sectionId}`}
        onClick={() => actions.selectSection(sectionId)}
        {...styledProps}
      >
        <div className="title">
          {title}

          <div className="anchorIcon">
            <AnchorIcon />
          </div>
        </div>
      </Link>

      <style jsx>{`
        .title {
          display: flex;
          align-items: baseline;
        }

        .anchorIcon {
          display: none;
          margin-left: 6px;
        }

        .title:hover .anchorIcon {
          display: block;
        }
      `}</style>
    </>
  )
}
