import { useCallback, useState } from 'react'
import { StyledProps, useStyle } from 'src/client/hooks/useStyle'
import { BurgerIcon } from 'src/client/icons/burger'
import { IconButton } from '../iconButton/iconButton'
import { Outside } from '../outside'
import { TopNavigationContext } from './topNavigation.context'
import {
  TopNavigationItem,
  TopNavigationItemProps,
} from './item/topNavigation.item'
import {
  TopNavigationLinkItem,
  TopNavigationLinkItemProps,
} from './item/topNavigation.linkItem'

type Item = React.ReactElement<
  TopNavigationItemProps | TopNavigationLinkItemProps
>

interface Props extends StyledProps {
  children: Item[] | Item
  profile?: React.ReactNode
}

export function TopNavigation({ children, profile, ...styledProps }: Props) {
  const style = useStyle(styledProps)

  const [active, setActive] = useState(false)

  const toggleMenu = useCallback(() => setActive((active) => !active), [])

  return (
    <TopNavigationContext.Provider value={{ toggleMenu }}>
      <Outside active={active} onOutsideClick={toggleMenu}>
        <div className="wrapper" style={style}>
          <IconButton
            theme="white"
            title="Навигация"
            size="M"
            onClick={toggleMenu}
          >
            <BurgerIcon
              color={active ? 'var(--primaryColor)' : 'black'}
              size={16}
            />
          </IconButton>

          {active && (
            <div className="menu">
              {profile && <div className="profile">{profile}</div>}

              {children}
            </div>
          )}

          <style jsx>{`
            .wrapper {
              position: relative;
              display: inline-block;
            }

            .menu {
              position: absolute;
              z-index: 2;
              margin-top: 12px;
              top: 100%;
              right: 0;
              background: #ffffff;
              border-radius: 9px;
              box-shadow: 0px 2px 10px rgba(150, 157, 156, 0.6);
              padding: 16px 20px;
            }

            .profile {
              margin-bottom: 16px;
            }
          `}</style>
        </div>
      </Outside>
    </TopNavigationContext.Provider>
  )
}

TopNavigation.Item = TopNavigationItem
TopNavigation.LinkItem = TopNavigationLinkItem
