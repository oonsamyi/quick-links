import * as React from 'react'

export interface SpinnerProps {
  size?: number
  theme?: SpinnerTheme
}

export type SpinnerTheme = 'white' | 'primary' | 'secondary' | 'gray'

export const Spinner = ({ size = 16, theme = 'primary' }: SpinnerProps) => (
  <>
    <svg
      width={size}
      height={size}
      viewBox="-2 -2 19 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="spinner"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.945 4.193a.664.664 0 0 1-.662-.662V.883c0-.364.298-.662.662-.662.364 0 .662.298.662.662V3.53a.664.664 0 0 1-.662.662Z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.82 4.696a.664.664 0 0 1-.242-.904l1.325-2.294a.664.664 0 0 1 .904-.242.664.664 0 0 1 .242.905l-1.324 2.293a.664.664 0 0 1-.904.242Z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.194 6.069a.664.664 0 0 1 .242-.905l2.293-1.324a.664.664 0 0 1 .905.242.664.664 0 0 1-.242.905L12.098 6.31a.664.664 0 0 1-.904-.242Z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.697 7.945c0-.364.298-.662.662-.662h2.649c.364 0 .662.298.662.662a.664.664 0 0 1-.662.662h-2.649a.664.664 0 0 1-.662-.662Z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.194 9.82a.664.664 0 0 1 .904-.242l2.293 1.325a.664.664 0 0 1 .243.904.664.664 0 0 1-.905.242l-2.293-1.324a.664.664 0 0 1-.242-.904Z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.82 11.194a.664.664 0 0 1 .905.242l1.324 2.293a.664.664 0 0 1-.242.905.664.664 0 0 1-.904-.242l-1.325-2.294a.664.664 0 0 1 .243-.904Z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.945 11.697c.364 0 .662.298.662.662v2.649a.664.664 0 0 1-.662.662.664.664 0 0 1-.662-.662v-2.649c0-.364.298-.662.662-.662Z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.069 11.194a.664.664 0 0 1 .242.904l-1.324 2.293a.664.664 0 0 1-.905.243.664.664 0 0 1-.242-.905l1.324-2.293a.664.664 0 0 1 .905-.242Z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.696 9.82a.664.664 0 0 1-.242.905L2.161 12.05a.664.664 0 0 1-.905-.242.664.664 0 0 1 .242-.904l2.294-1.325a.664.664 0 0 1 .904.243Z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.193 7.945a.664.664 0 0 1-.662.662H.883a.664.664 0 0 1-.662-.662c0-.364.298-.662.662-.662H3.53c.364 0 .662.298.662.662Z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.696 6.069a.664.664 0 0 1-.904.242L1.498 4.987a.664.664 0 0 1-.242-.905.664.664 0 0 1 .905-.242l2.293 1.324a.664.664 0 0 1 .242.905Z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.069 4.696a.664.664 0 0 1-.905-.242L3.84 2.161a.664.664 0 0 1 .242-.905.664.664 0 0 1 .905.242L6.31 3.792a.664.664 0 0 1-.242.904Z"
      />
    </svg>

    <style jsx>{`
      .spinner path {
        fill: ${getSpinnerColor(theme)};
      }
    `}</style>

    <style jsx>{`
      .spinner path {
        transform: translate3d(0, 0, 0);
        transform-origin: center;
        opacity: 0.2;
        animation-duration: 1.2s;
        animation-name: circle-spin;
        animation-iteration-count: infinite;
      }

      .spinner path:nth-of-type(1) {
        animation-delay: 0.1s;
      }

      .spinner path:nth-of-type(2) {
        animation-delay: 0.2s;
      }

      .spinner path:nth-of-type(3) {
        animation-delay: 0.3s;
      }

      .spinner path:nth-of-type(4) {
        animation-delay: 0.4s;
      }

      .spinner path:nth-of-type(5) {
        animation-delay: 0.5s;
      }

      .spinner path:nth-of-type(6) {
        animation-delay: 0.6s;
      }

      .spinner path:nth-of-type(7) {
        animation-delay: 0.7s;
      }

      .spinner path:nth-of-type(8) {
        animation-delay: 0.8s;
      }

      .spinner path:nth-of-type(9) {
        animation-delay: 0.9s;
      }

      .spinner path:nth-of-type(10) {
        animation-delay: 1s;
      }

      .spinner path:nth-of-type(11) {
        animation-delay: 1.1s;
      }

      .spinner path:nth-of-type(12) {
        animation-delay: 1.2s;
      }

      @keyframes circle-spin {
        from {
          opacity: 1;
          transform: scale(1.2);
        }
        to {
          opacity: 0.2;
          transform: scale(1);
        }
      }
    `}</style>
  </>
)

function getSpinnerColor(theme: SpinnerTheme): string {
  switch (theme) {
    case 'primary':
      return 'var(--primaryColor)'

    case 'secondary':
      return 'var(--secondaryColor)'

    case 'white':
      return 'white'

    case 'gray':
      return '#737a8e'
  }
}
