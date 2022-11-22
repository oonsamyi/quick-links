import css from 'styled-jsx/css'

interface Params {
  maxWidth?: number
}

export function dynamicInputStyles({ maxWidth }: Params) {
  return css.resolve`
    .input {
      ${maxWidth ? `max-width: ${maxWidth}px` : ''} }
    }
  `
}

export const staticInputStyles = css`
  .input {
    display: flex;
    align-items: center;
    width: 100%;
    border-radius: 8px;
    transition: border-color 0.5s ease;
  }

  .white {
    background-color: white;
    border: 1px solid white;
  }

  .gray {
    background-color: #f0f0f3;
    border: 1px solid #f0f0f3;
  }

  .input::placeholder {
    color: #a0a0a0;
  }

  .input:focus {
    border-color: var(--primaryColor);
  }

  .disabled {
    cursor: not-allowed;
    color: #ced1d7;
  }

  .S {
    height: 30px;
    padding: 0 10px;
    font-size: 12px;
    line-height: 18px;
  }

  .M {
    height: 44px;
    padding: 0 16px;
    font-size: 14px;
    line-height: 22px;
  }
`
