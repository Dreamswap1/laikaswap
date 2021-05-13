import React from 'react'
import styled from 'styled-components'
import {Button} from '@pancakeswap-libs/uikit'
import TranslatedText from '../TranslatedText'

const StyledNav = styled.div`
  margin-bottom: 40px;
`

const Nav = ({ activeIndex = 0 }: { activeIndex?: number }) => (
  <StyledNav>
      <Button id="laika-btn">
        <TranslatedText translationId={8}>LaikaCoin Swap</TranslatedText>
      </Button>
      {/* <ButtonMenuItem id="pool-nav-link" to="/pool" as={Link}>
        <TranslatedText translationId={74}>Liquidity</TranslatedText>
      </ButtonMenuItem> */}
      {/* <ButtonMenuItem
        id="pool-nav-link"
        as="a"
        href="#"
        target="_blank"
        rel="noreferrer noopener"
      >
        Bridge
      </ButtonMenuItem> */}
  </StyledNav>
)

export default Nav
