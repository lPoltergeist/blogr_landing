import React from 'react'
import Logo from '../../images/logo.svg';

import { FooterContainer, FooterMenu, MenuList } from './styles';

const Footer = () => {
    return (
        <FooterContainer>

            <FooterMenu>

                <div className="logo">
                    <img src={Logo} alt="logo" />
                </div>


                <MenuList>
                    <h4>Product</h4>
                    <ul>
                        <li>Overview</li>
                        <li>Pricing</li>
                        <li>Marketplace</li>
                        <li>Features</li>
                        <li>Integrations</li>
                    </ul>
                </MenuList>

                <MenuList>
                    <h4>Company</h4>
                    <ul>
                        <li>About</li>
                        <li>Team</li>
                        <li>Blog</li>
                        <li>Careers</li>
                    </ul>
                </MenuList>

                <MenuList>
                    <h4>Connect</h4>
                    <ul>
                        <li>Contact</li>
                        <li>Newsletter</li>
                        <li>Linkedin</li>
                    </ul>
                </MenuList>

            </FooterMenu>
        </FooterContainer>
    )
}

export default Footer