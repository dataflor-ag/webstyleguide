import React from "react"
import styled from "@emotion/styled"
import { palette } from "@dataflor-ag/df-ui-theme"

interface IconHeroProps {
  children?: React.ReactNode
}

const IconHeroRoot = styled.div`
  margin-bottom: 0.5rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const IconHeroWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 5.5rem;
  height: 5.5rem;

  border-radius: 9999px;
  box-shadow: inset 0px 1px 0px 0px ${palette.grey?.[200]};
  background-color: white;
  background-image: linear-gradient(
    0deg,
    rgba(255, 255, 255, 0) 21%,
    #f4f4f5 100%
  );
`

const IconHeroItem = styled.div`
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 9999px;
  background: #ffffff;
  color: ${palette.grey?.[600]};
  box-shadow: 0 4px 8px -2px rgba(0, 0, 0, 0.1), 0 2px 4px 0 rgba(0, 0, 0, 0.05),
    0 0 0 1px #e9e9ec;

  height: 3.5rem;
  width: 3.5rem;

  svg {
    font-size: 1.5rem;
  }
`

export const IconHero = React.forwardRef<HTMLDivElement, IconHeroProps>(
  (props, ref) => (
    <IconHeroRoot ref={ref}>
      <IconHeroWrapper>
        <IconHeroItem>{props.children}</IconHeroItem>
      </IconHeroWrapper>
    </IconHeroRoot>
  )
)

export default IconHero
