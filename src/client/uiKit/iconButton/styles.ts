import { CssColor } from 'src/client/types/css'
import { mapCssColor } from 'src/client/utils/css/mapCssColor'
import css from 'styled-jsx/css'

interface Params {
  color: CssColor
  hoverColor: CssColor
}

export function dynamicIconButtonStyles({ color, hoverColor }: Params) {
  return css.resolve`
    .button {
      color: ${mapCssColor(color)};
    }

    .button:hover {
      color: ${mapCssColor(hoverColor)};
    }
  `
}

export const staticIconButtonStyles = css`
  .button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    transition: filter 0.3s ease;
  }

  .primary {
    color: white;
    background-color: var(--primaryColor);
    outline-color: #1b9a87;
  }

  .white {
    color: black;
    background-color: white;
  }

  .transparent {
    background-color: transparent;
  }

  .primary:hover {
    filter: drop-shadow(0px 2px 4px rgba(82, 82, 82, 0.4));
  }

  .white:hover {
    filter: drop-shadow(0px 2px 6px rgba(82, 82, 82, 0.25));
  }

  .XS {
    width: 24px;
    height: 24px;
    border-radius: 6px;
  }

  .S {
    width: 30px;
    height: 30px;
    border-radius: 9px;
  }

  .M {
    width: 34px;
    height: 34px;
    border-radius: 12px;
  }

  .loading {
    cursor: default;
  }

  .disabled {
    cursor: not-allowed;
    color: #ced1d7;
    background-color: #f0f0f3;
    box-shadow: initial;
  }

  .transparent.disabled {
    background-color: transparent;
  }
`
