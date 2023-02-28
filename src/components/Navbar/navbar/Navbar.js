import React, { useState } from 'react'
import { Sidebar } from '../sidebar/Sidebar';
import Logo from '../../../images/logo.svg'

import {IoIosArrowDown, IoIosArrowUp} from 'react-icons/io'
import { Header } from './style.js';
import "./style.js"
import {Company, Connect, Product} from '../Dropdown/Dropdown'


const IconSize = 15;

const Navbar = () => {
    const [ProductMenu, setProductMenu] = useState(false);
    const [CompanyMenu, setCompanyMenu] = useState(false);
    const [ConnectMenu, setConnectMenu] = useState(false);

    
    const SetProduct = () => {
        setProductMenu(!ProductMenu);
        setCompanyMenu(false);
        setConnectMenu(false);
      }
  
      const SetCompany = () => {
        setProductMenu(false);
        setCompanyMenu(!CompanyMenu);
        setConnectMenu(false);
      }
  
      const SetConnect = () => {
        setProductMenu(false);
        setCompanyMenu(false);
        setConnectMenu(!ConnectMenu);
      }

  return (
    <Header>
        <nav>
            <div className="navmenu" alt="Logo_Blogr">
            <img src={Logo}/>
                <ul>
                    <li onClick={SetProduct}>
                        Product {ProductMenu ? <IoIosArrowUp size={IconSize}/> : <IoIosArrowDown size={IconSize}/>}
                        {ProductMenu && <Product/>}
                    </li>

                    <li  onClick={SetCompany}>
                        Company  {CompanyMenu ? <IoIosArrowUp size={IconSize}/> : <IoIosArrowDown size={IconSize}/>}
                        {CompanyMenu && <Company/>}
                    </li>
                    <li  onClick={SetConnect}>
                        Connect  {ConnectMenu ? <IoIosArrowUp size={IconSize}/> : <IoIosArrowDown size={IconSize}/>}
                        {ConnectMenu && <Connect/>}
                    </li>
                </ul>
            </div>

            <div className="loginDiv">
                    <button className="login">Login</button>
                    <button className="signup">Sign Up</button>
            </div>

            <Sidebar/>
        </nav>
    </Header>
  )
}

export default Navbar