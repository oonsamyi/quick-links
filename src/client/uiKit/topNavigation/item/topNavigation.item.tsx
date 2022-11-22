import { IconProps } from 'src/client/icons/icon'
import { ItemView } from './itemView'
import { ItemWrapper } from './itemWrapper'

export interface TopNavigationItemProps {
  icon: React.ComponentType<IconProps>
  children: React.ReactNode
  loading?: boolean
  onClick(): void
}

export function TopNavigationItem({
  icon,
  children,
  loading,
  onClick,
}: TopNavigationItemProps) {
  return (
    <ItemWrapper>
      <button type="button" className="button" onClick={onClick}>
        <ItemView
          active={false}
          icon={icon}
          loading={loading}
          children={children}
        />
      </button>

      <style jsx>{`
        .button {
          width: 100%;
        }
      `}</style>
    </ItemWrapper>
  )
}
