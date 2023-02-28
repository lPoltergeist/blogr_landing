import styled from "styled-components"

export const SidebarIconDiv = styled.div`
height: 30px;
width: 30px;

@media (min-width: 768px) {
    display:none;
}
`

export const SidebarContainer = styled.div`


background-color: #f2f2f2;
border-radius: 5px;
position: fixed;
top: 45vh;
left: 50vw;
transform: ${props => props.IsOpen ? `translate(-50%, -50%)` : 'translate(-500%, -50%)'};

min-height: 15rem;
width: 80vw;
max-width: 25rem;

-webkit-box-shadow: 3px 6px 47px -12px rgba(0,0,0,0.75);
-moz-box-shadow: 3px 6px 47px -12px rgba(0,0,0,0.75);
box-shadow: 3px 6px 47px -12px rgba(0,0,0,0.75);

color: #7E7E7E;

img {
    @media (max-width: 1000px) {
        display: none;
    }
}

.sidebarContainer {
 
}

.sidebarmenu {
  text-align: center;

  h3 {
    color: #3c3f60;
    font-weight: bold;
    margin: 1rem 0;
  }

  li {
    margin: 0.3rem 0;

    list-style: none;
    font-weight: bold;
    }
}

.rectangle {
    margin: auto;
    height: 2px;
  width: 80%;
  background-color: rgba(216,216,216, 0.5);
}

.Buttondiv {
   
}
`

export const Buttondiv = styled.div`
 display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding-top: 1rem;
    
    button {
        margin: 1rem 0;
    }
   
    
    .LoginButton {
    background: transparent;
    border: none;
    color: black;
    font-size: 1rem;
  
}

.SignupButton {
    background: rgb(255,138,112);
    background: linear-gradient(90deg, rgba(255,138,112,1) 0%, rgba(255,108,101,1) 50%, rgba(255,100,98,1) 100%);

  color: #fff;
  font-size: 1rem;
  border: none;
  border-radius: 20px;
  height: 2.5rem;
  width: 7rem;


  font-weight: bold;
}
`

export const SubMenu = styled.div`
min-height: 3rem;
width: 90%;
background-color: rgba(194,194,194, 0.4);
border-radius: 10px;
margin: 1rem auto;
padding: 0.3rem 0;
font-size: 1rem;

`
