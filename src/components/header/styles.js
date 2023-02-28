import styled from "styled-components";

export const HeaderContainer = styled.header`
height: 25rem;
background: rgb(255,138,112);
background: linear-gradient(90deg, rgba(255,138,112,1) 0%, rgba(255,108,101,1) 50%, rgba(255,100,98,1) 100%);
width: 100%;
display: flex;
border-radius: 0 0 0 5rem;

`

export const Container = styled.div`

margin: auto;
text-align: center;

h1 {
    color: #fff;
    font-size: 4rem;
    margin: 2rem 0;
    letter-spacing: 2.5px;

    @media (max-width: 768px) {
        font-size: 2.5rem;
    }
    
}

span {
    color:#fff;
    font-weight: bold;
    font-size: 1.2rem;
    
}
`

export const MainButtonDiv = styled.div`
margin: 2rem 0 5rem 0;
button {
    height: 2.5rem;
    width: 7.5rem;
    border-radius: 20px;
    border: none;
    font-size: 1rem;
    font-weight: bold;
    margin: 0 1rem;

    transition: ease-in 0.2s;
}

.Start {
    background-color: #fff;
    color: #ff6462;
    :hover{
        background-color: #ff7b86;
        color: #fff;
    }
}

.Learn {
    background: transparent;
    outline: 1px solid white;
    color: #fff;

    :hover{
        background-color: #fff;
        color: #ff6462;
    }
}
`