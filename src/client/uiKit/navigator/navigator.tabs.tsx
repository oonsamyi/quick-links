import classNames from 'classnames'
import { tabsHeight, tabsMarginBottom, tabsPaddingX } from './constants'
import { useNavigatorContext } from './navigator.context'
import { TabProps } from './navigator.tab'

interface Props {
  children: React.ReactElement<TabProps>[]
}

export function NavigatorTabs({ children }: Props) {
  const { state, refs } = useNavigatorContext()

  return (
    <div
      className={classNames('tabs', state.isTabsSticky && 'sticky')}
      ref={refs.tabs}
    >
      {children}

      <style jsx global>{`
        html {
          /* нужен для корректного восстановления скролла при перезагрузке страницы с якорем */
          scroll-padding-top: ${tabsHeight + tabsMarginBottom}px;
        }
      `}</style>

      <style jsx>{`
        .tabs {
          position: sticky;
          top: -2px;
          z-index: 1;
          display: flex;
          overflow-x: auto;
          padding: 12px 0 10px;
          border-bottom-left-radius: 15px;
          border-bottom-right-radius: 15px;
          transition-property: padding, background-color;
          transition-timing-function: ease;
          transition-duration: 0.3s;
        }

        .tabs.sticky {
          background-color: white;
          padding-left: ${tabsPaddingX}px;
          padding-right: ${tabsPaddingX}px;
        }

        .tabs {
          --scrollbarBgColor: transparent;
          --thumbBgColor: #dfdfdf;
        }

        .tabs:hover {
          --thumbBgColor: #c7c7c7;
        }

        .tabs::-webkit-scrollbar {
          height: 4px;
        }

        .tabs {
          scrollbar-width: thin;
          scrollbar-color: var(--thumbBgColor) var(--scrollbarBgColor);
        }

        .tabs::-webkit-scrollbar-track {
          background: var(--scrollbarBgColor);
        }

        .tabs::-webkit-scrollbar-thumb {
          background-color: var(--thumbBgColor);
          border-radius: 6px;
          border: 3px solid var(--scrollbarBgColor);
        }
      `}</style>
    </div>
  )
}
