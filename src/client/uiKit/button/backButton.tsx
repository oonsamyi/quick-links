import { ArrowIcon } from 'src/client/icons/arrow'
import { Text } from '../typography/text'
import { StyledProps, useStyle } from 'src/client/hooks/useStyle'
import { useRouter } from 'next/router'
import { useCallback } from 'react'

interface Props extends StyledProps {
  children: React.ReactNode
  onClick?(): void
}

export function BackButton({ children, onClick, ...styledProps }: Props) {
  const style = useStyle(styledProps, { mb: 30 })
  const router = useRouter()

  const goToBack = useCallback(() => {
    router.back()
  }, [router])

  return (
    <>
      <button
        type="button"
        style={style}
        className="button"
        onClick={onClick || goToBack}
      >
        <ArrowIcon size={14} direction="left" />

        <Text ml={8} size="S" fontWeight="semiBold">
          {children}
        </Text>
      </button>

      <style jsx>{`
        .button {
          display: flex;
          align-items: center;
          white-space: nowrap;
          padding: 4px 0;
        }
      `}</style>
    </>
  )
}
