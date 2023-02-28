import React from 'react'
import { ProductContainer, CompanyContainer, ConnectContainer } from './styles'

export const Product = () => {
  return (
    <ProductContainer>
      <div className="Dropmenu">
        <a>Overview</a>
        <a>Pricing</a>
        <a>MarketPlace</a>
        <a>Features</a>
        <a>Integrations</a>
      </div>
    </ProductContainer>
  )
}

export const Company = () => {
  return (
    <CompanyContainer>
      <div className="Dropmenu">
        <a>About</a>
        <a>Team</a>
        <a>Blog</a>
        <a>Careers</a>
      </div>
    </CompanyContainer>
  )
}

export const Connect = () => {
  return (
    <ConnectContainer>
      <div className="Dropmenu">
        <a>Contact</a>
        <a>Newsletter</a>
        <a>Linkedin</a>
      </div>
    </ConnectContainer>
  )
}

