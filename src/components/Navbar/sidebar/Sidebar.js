import React, { useState, useEffect, useRef } from 'react'

import { SidebarIconDiv, SidebarContainer, Buttondiv, SubMenu } from './sidebarStyle';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'

import Menuicon from '../../../images/icon-hamburger.svg'
import Closeicon from '../../../images/icon-close.svg'

export const Sidebar = () => {
  const [MenuIsOpen, setMenuIsOpen] = useState(false);
  const [ProductIsOpen, setProductIsOpen] = useState(false);
  const [CompanyIsOpen, setCompanyIsOpen] = useState(false);
  const [ConnectIsOpen, setConnectIsOpen] = useState(false);

  const OpenMenu = () => setMenuIsOpen(!MenuIsOpen)

  const ArrowColor = "#ff6462"
  let menuRef = useRef();

  const SetProduct = () => {
    setProductIsOpen(!ProductIsOpen);
    setCompanyIsOpen(false);
    setConnectIsOpen(false);
  }

  const SetCompany = () => {
    setProductIsOpen(false);
    setCompanyIsOpen(!CompanyIsOpen);
    setConnectIsOpen(false);
  }

  const SetConnect = () => {
    setProductIsOpen(false);
    setCompanyIsOpen(false);
    setConnectIsOpen(!ConnectIsOpen);
  }


  
  const [screenSize, getDimension] = useState({
    dynamicWidth: window.innerWidth,
    dynamicHeight: window.innerHeight
  });
  const setDimension = () => {
    getDimension({
      dynamicWidth: window.innerWidth,
      dynamicHeight: window.innerHeight
    })
  }


  //close sidebar if width > 1000
  useEffect(() => {
    window.addEventListener('resize', setDimension);
    if (screenSize.dynamicWidth > 1000) {
      setMenuIsOpen(false);
    }
    return (() => {
      window.removeEventListener('resize', setDimension);

    })
  }, [screenSize, setMenuIsOpen])


  //close sidebar on click outside
  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setMenuIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    }
  })



  return (
    <>
      <SidebarIconDiv>
        <img onClick={OpenMenu} src={MenuIsOpen ? Closeicon : Menuicon} />
      </SidebarIconDiv>

      <SidebarContainer IsOpen={MenuIsOpen}>
        <div className="sidebarcontainer"  >
          <div className="sidebarmenu" ref={menuRef}>
            <ul>
              <h3 onClick={SetProduct}>Product {ProductIsOpen ? <IoIosArrowUp color={ArrowColor} /> :
                <IoIosArrowDown color={ArrowColor} />}
              </h3>

              {ProductIsOpen &&
                <SubMenu>
                  <li>Overview</li>
                  <li>Pricing</li>
                  <li>Marketplace</li>
                  <li>Features</li>
                  <li>Integrations</li>
                </SubMenu>}
            </ul>

            <ul>
              <h3 onClick={SetCompany}>Company {CompanyIsOpen ? <IoIosArrowUp color={ArrowColor} /> :
                <IoIosArrowDown color={ArrowColor} />}
              </h3>
              {CompanyIsOpen &&
                <SubMenu>
                  <li>About</li>
                  <li>Team</li>
                  <li>Blog</li>
                  <li>Careers</li>
                </SubMenu>}
            </ul>

            <ul>
              <h3 onClick={SetConnect}>Connect {ConnectIsOpen ? <IoIosArrowUp color={ArrowColor} /> :
                <IoIosArrowDown color={ArrowColor} />}
              </h3>
              {ConnectIsOpen &&
                <SubMenu>
                  <li>Contact</li>
                  <li>Newsletter</li>
                  <li>Linkedin</li>
                </SubMenu>}
            </ul>
          </div>


          <div className="rectangle"> </div>
          <Buttondiv>
            <button className="LoginButton">Login</button>
            <button className="SignupButton">Sign Up</button>
          </Buttondiv>
        </div>
      </SidebarContainer>
    </>
  )
}

export default Sidebar;