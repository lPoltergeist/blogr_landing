import React from 'react'
import { MiddleContainer, ImageContainer, TextContainer, Title } from './styles'

import Phone from '../../images/illustration-phones.svg'

const MiddleArt = () => {
  return (
    <MiddleContainer>
      <ImageContainer>
        <picture>
          <source media="(min-width: 768px)" srcSet={Phone} />
          <img src={Phone} />
        </picture>
      </ImageContainer>

      <TextContainer>
        <div>
          <Title><h2>State of the Art infrastructure</h2></Title>
          <span>With reliabiity and speed in mind, worldwide data centers provide the
            backbone for ultra-fast connectivity. This ensures your site will load
            instantly, no matter where your readers are, keeping your site
            competitive.
          </span>
        </div>
      </TextContainer>


    </MiddleContainer>
  )
}

export default MiddleArt