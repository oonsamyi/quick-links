import React from 'react'
import { QuickLink } from 'src/client/components/quickLink/quickLink'
import { Header } from 'src/client/components/header'
import { createSsrHandler } from '../network/createSsrHandler'
import { typedQuery } from '../network/apollo'
import { lastQuickLinksSelector } from '../components/quickLink/quickLink.api'

export const getServerSideProps = createSsrHandler(({ apolloClient }) =>
  typedQuery(apolloClient, lastQuickLinksSelector),
)

export default function MainPage() {
  return (
    <>
      <Header />

      <QuickLink />
    </>
  )
}
