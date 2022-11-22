import { Title } from './typography/title'

export function Logo() {
  return (
    <>
      <Title size="L" whiteSpace="nowrap" fontWeight="extraBold">
        Quick <span className="secondPart">Links</span>
      </Title>

      <style jsx>{`
        .secondPart {
          color: var(--primaryColor);
        }
      `}</style>
    </>
  )
}
