export interface NavigatorState {
  tabId(sectionId: string): string
  selectedSection: string | null
  isTabsSticky: boolean
}

export interface NavigatorActions {
  selectSection(sectionId: string): void
  registerSection(element: HTMLDivElement | null, sectionId: string): void
}

export interface NavigatorRefs {
  tabs: React.RefObject<HTMLDivElement>
}
