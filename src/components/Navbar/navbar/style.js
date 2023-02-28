import styled from 'styled-components'

export const Header = styled.header`
   background: rgb(255,138,112);
background: linear-gradient(90deg, rgba(255,138,112,1) 0%, rgba(255,108,101,1) 50%, rgba(255,100,98,1) 100%);
    width: 100%;
    height: 10rem;
    display: flex;

    nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100vw;
    padding: 0 5rem;
   
    @media (max-width: 1000px) {
        padding: 0 2rem;
    }

}

.navmenu {
display: flex;
align-items: center;   



ul {
    display: flex;
    margin: 0 3rem;
    
    @media (max-width: 768px) {
        display: none;
    }
}

li {
    list-style: none;
    font-weight: bold;
    color: #fff;
    font-size: 1.2rem;
    display: flex;
    align-items: center;
}
}




svg{
    margin-left: 0.2rem;
}

li:nth-child(2) {
    margin: 0 1rem;
}

/* Button */

.loginDiv {
    @media (max-width: 768px) {
        display: none;
    }
}

.login {
    background: transparent;
    border: none;
    color: #fff;
    font-size: 1rem;
    padding-right: 2rem;
}

.signup {
    border-radius: 20px;
    border: none;
    height: 2.5rem;
    width: 8rem;
    font-size: 1rem;
    font-weight: bold;
    color: #ff6462;
    transition: ease-in-out 0.2s;

    :hover{
        background-color: #ff7b86;
        color: #fff;
    }
}
`



