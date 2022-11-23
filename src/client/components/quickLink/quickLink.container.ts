import { useState } from 'react'
import { toast } from 'react-toastify'
import { useTypedMutation } from 'src/client/network/apollo'
import { createContainer } from 'unstated-next'
import { createQuickLinkSelector } from './quickLink.api'

function useQuickLink() {
  const [loading, setLoading] = useState(false)
  const [longLink, setLongLink] = useState('')

  const [createQuickLinkRequest, createQuickLinkResult] = useTypedMutation(
    createQuickLinkSelector,
  )

  const quickLink = createQuickLinkResult.data?.createQuickLink || ''

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
    quickLink,
    longLink,
    loading,
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
