import classNames from 'classnames'
import { IconProps } from 'src/client/icons/icon'
import { LazySpinner } from '../../spinner/lazySpinner'
import { Text } from '../../typography/text'

interface Props {
  active: boolean
  loading?: boolean
  icon: React.ComponentType<IconProps>
  children: React.ReactNode
}

export function ItemView({ active, loading, icon: Icon, children }: Props) {
  return (
    <div
      className={classNames('view', active && 'active', loading && 'loading')}
    >
      <LazySpinner
        loading={!!loading}
        size={16}
        theme="gray"
        children={<Icon size={16} color="currentColor" />}
      />

      <Text ml={14} size="S">
        {children}
      </Text>

      <style jsx>{`
        .view {
          display: flex;
          align-items: center;
          cursor: pointer;
          padding: 4px 0;
          white-space: nowrap;
          transition: color 0.3s ease;
        }

        .view.active {
          color: var(--primaryColor);
          cursor: default;
        }

        .view.loading {
          color: #a0a0a0;
          cursor: default;
        }

        .view:hover:not(.active):not(.loading) {
          color: var(--secondaryColor);
        }
      `}</style>
    </div>
  )
}
