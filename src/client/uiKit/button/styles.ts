import css from 'styled-jsx/css'

export const staticButtonStyles = css`
  .button {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    font-weight: 600;
    white-space: nowrap;
    transition: filter 0.3s ease;
    flex-shrink: 0;
  }

  .primary {
    color: white;
    background-color: var(--primaryColor);
    outline-color: #1b9a87;
  }

  .semiPrimary {
    color: var(--primaryColor);
    background-color: #c1efe8;
  }

  .transparent {
    color: black;
    background-color: transparent;
  }

  .primary:hover {
    filter: drop-shadow(0px 4px 4px #c6c6c6);
  }

  .semiPrimary:hover {
    filter: drop-shadow(0px 4px 4px #dfdfdf);
  }

  .disabled {
    cursor: not-allowed;
    color: #ced1d7;
    background-color: #f0f0f3;
    box-shadow: initial;
  }

  .loading {
    cursor: default;
  }

  .XS {
    padding: 0 16px;
    min-width: 60px;
    height: 30px;
    font-size: 12px;
    line-height: 18px;
    border-radius: 15px;
  }

  .M {
    padding: 0 14px;
    min-width: 80px;
    height: 44px;
    font-size: 14px;
    line-height: 22px;
    border-radius: 25px;
  }

  .L {
    padding: 0 20px;
    min-width: 140px;
    height: 50px;
    font-size: 16px;
    line-height: 26px;
    border-radius: 25px;
  }
`
