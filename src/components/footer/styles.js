import styled from "styled-components";

export const FooterContainer = styled.footer`
background-color: #24242c;


border-radius: 0 5rem 0 0;

@media (max-width: 768px) {
   height: auto;
}
`

export const FooterMenu = styled.div`
display: flex;
justify-content: space-evenly;

@media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
   justify-content: center;
}

.logo {
    margin-top: 2rem;
}

`

export const MenuList = styled.div`
margin-bottom: 2rem;
margin-top: 1.5rem;
h4 {
    color: #fff;
    padding: 1rem 0;
    font-size: 1.2rem;
}

li {
    font-size: 1.05rem;
    letter-spacing: 1.75px;
    list-style: none;
    color: #fff;
    padding: 0.1rem 0;

}
`