import { LazyLoader } from '../lazyLoader'
import { Spinner, SpinnerProps } from './spinner'

interface Props extends SpinnerProps {
  loading: boolean
  children: React.ReactNode
}

export function LazySpinner({ loading, children, ...spinnerProps }: Props) {
  return (
    <LazyLoader
      loading={loading}
      children={children}
      loader={<Spinner {...spinnerProps} />}
    />
  )
}
