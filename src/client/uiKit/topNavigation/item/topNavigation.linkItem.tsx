import { useRouter } from 'next/router'
import { usePreventedHandler } from 'src/client/hooks/usePreventedHandler'
import { IconProps } from 'src/client/icons/icon'
import { Link } from '../../link'
import { useTopNavigationContext } from '../topNavigation.context'
import { ItemView } from './itemView'
import { ItemWrapper } from './itemWrapper'

export interface TopNavigationLinkItemProps {
  href: string
  icon: React.ComponentType<IconProps>
  children: React.ReactNode
}

export function TopNavigationLinkItem({
  href,
  icon,
  children,
}: TopNavigationLinkItemProps) {
  const router = useRouter()
  const { toggleMenu } = useTopNavigationContext()

  const active = href === router.pathname

  const handleClick = usePreventedHandler({
    preventDefault: active,
    handler: active ? undefined : toggleMenu,
  })

  return (
    <ItemWrapper>
      <Link href={href} onClick={handleClick}>
        <ItemView active={active} icon={icon} children={children} />
      </Link>
    </ItemWrapper>
  )
}
