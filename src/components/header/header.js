import React from 'react'
import { HeaderContainer, Container, MainButtonDiv } from './styles'

const Header = () => {
  return (
    <HeaderContainer>
      <Container>
        <h1>A modern publishing platform</h1>
        <span>Grow your audience and build your online brand</span>
        <MainButtonDiv>
          <button className="Start"> Start for Free</button>
          <button className="Learn">Learn More</button>
        </MainButtonDiv>
      </Container>

    </HeaderContainer>

  )
}

export default Header