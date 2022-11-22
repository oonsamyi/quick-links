import { Button } from '../button/button'
import { tabsMarginBetween } from './constants'
import { useNavigatorContext } from './navigator.context'

export interface TabProps {
  sectionId: string
  title: string
}

export function NavigatorTab({ sectionId, title }: TabProps) {
  const { state, actions } = useNavigatorContext()

  return (
    <div className="tab" id={state.tabId(sectionId)}>
      <Button
        size="XS"
        theme={state.selectedSection === sectionId ? 'primary' : 'semiPrimary'}
        preventDefault
        onClick={() => actions.selectSection(sectionId)}
      >
        {title}
      </Button>

      <style jsx>{`
        .tab + .tab {
          margin-left: ${tabsMarginBetween}px;
        }
      `}</style>
    </div>
  )
}
