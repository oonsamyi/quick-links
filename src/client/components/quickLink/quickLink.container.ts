import { useState } from 'react'
import { toast } from 'react-toastify'
import { useTypedMutation, useTypedQuery } from 'src/client/network/apollo'
import { createContainer } from 'unstated-next'
import {
  createQuickLinkSelector,
  lastQuickLinksQuery,
  lastQuickLinksSelector,
} from './quickLink.api'

function useQuickLink() {
  const [loading, setLoading] = useState(false)
  const [longLink, setLongLink] = useState('')

  const lastQuickLinksResult = useTypedQuery(lastQuickLinksSelector)

  const [createQuickLinkRequest, createQuickLinkResult] = useTypedMutation(
    createQuickLinkSelector,
    {
      refetchQueries: [{ query: lastQuickLinksQuery }],
      awaitRefetchQueries: true,
    },
  )

  const lastQuickLinks = lastQuickLinksResult.data?.lastQuickLinks || []
  const quickLink = createQuickLinkResult.data?.createQuickLink.quickLink || ''

  const createQuickLink = async () => {
    if (!longLink.trim()) return

    setLoading(true)

    const { data } = await createQuickLinkRequest({
      variables: {
        link: longLink,
      },
    })

    if (data) toast.success('Ссылка успешно создана')

    setLoading(false)
  }

  const copyQuickLink = async () => {
    if (!quickLink) {
      toast.warn('Создайте ссылку, чтобы ее скопировать')
      return
    }

    try {
      await navigator.clipboard.writeText(quickLink)
      toast.success('Ссылка скопирована')
    } catch (error: any) {
      toast.error(error?.message)
    }
  }

  const state = {
    loading,
    quickLink,
    longLink,
    lastQuickLinks,
  }

  const actions = {
    setLongLink,
    createQuickLink,
    copyQuickLink,
  }

  return {
    state,
    actions,
  }
}

export const QuickLinkContainer = createContainer(useQuickLink)
