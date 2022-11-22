import { CssColor } from 'src/client/types/css'

export function mapCssColor(color: CssColor): string {
  switch (color) {
    case 'primary':
      return 'var(--primaryColor)'

    case 'secondary':
      return 'var(--secondaryColor)'

    default:
      return color
  }
}
