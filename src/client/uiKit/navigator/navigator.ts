import { NavigatorAnchor } from './navigator.anchor'
import { NavigatorProvider } from './navigator.provider'
import { NavigatorSection } from './navigator.section'
import { NavigatorTab } from './navigator.tab'
import { NavigatorTabs } from './navigator.tabs'

export const Navigator = {
  Provider: NavigatorProvider,
  Tabs: NavigatorTabs,
  Tab: NavigatorTab,
  Section: NavigatorSection,
  Anchor: NavigatorAnchor,
}
