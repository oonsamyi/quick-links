import { CssColor } from 'src/client/types/css'
import { mapCssColor } from 'src/client/utils/css/mapCssColor'
import css from 'styled-jsx/css'
import { FontWeight, TextAlign, WhiteSpace } from './types'

interface Params {
  textAlign: TextAlign
  whiteSpace: WhiteSpace
  fontWeight: FontWeight
  color: CssColor
}

export function dynamicTextStyles({
  textAlign,
  whiteSpace,
  fontWeight,
  color,
}: Params) {
  return css.resolve`
    .text {
      text-align: ${textAlign};
      white-space: ${whiteSpace};
      font-weight: ${mapFontWeight(fontWeight)};
      color: ${mapCssColor(color)};
    }
  `
}

function mapFontWeight(fontWeight: FontWeight): number {
  switch (fontWeight) {
    case 'normal':
      return 400

    case 'semiBold':
      return 600

    case 'bold':
      return 700

    case 'extraBold':
      return 800
  }
}

export const staticTextStyles = css`
  .XXS {
    font-size: 10px;
    line-height: 16px;
  }

  .XS {
    font-size: 12px;
    line-height: 18px;
  }

  .S {
    font-size: 14px;
    line-height: 22px;
  }

  .M {
    font-size: 16px;
    line-height: 26px;
  }

  .L {
    font-size: 20px;
    line-height: 32px;
  }

  .XL {
    font-size: 24px;
    line-height: 38px;
  }

  .XXL {
    font-size: 28px;
    line-height: 44px;
  }

  .ellipsis {
    overflow: hidden;
    text-overflow: ellipsis;
  }
`
