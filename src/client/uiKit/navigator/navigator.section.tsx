import { tabsHeight, tabsMarginBottom } from './constants'
import { useNavigatorContext } from './navigator.context'

interface Props {
  sectionId: string
  children: React.ReactNode
}

export function NavigatorSection({ sectionId, children }: Props) {
  const { actions } = useNavigatorContext()

  return (
    <div
      id={sectionId}
      className="section"
      ref={(element) => actions.registerSection(element, sectionId)}
    >
      {children}

      <style jsx>{`
        .section + .section {
          /* Если понадобится кастомизировать - вынести в проп в NavigatorProvider */
          margin-top: 20px;
        }

        .section:last-child {
          /* 16px - нижний паддинг страницы */
          min-height: calc(
            100vh - 16px - ${tabsMarginBottom}px - ${tabsHeight}px
          );
        }
      `}</style>
    </div>
  )
}
