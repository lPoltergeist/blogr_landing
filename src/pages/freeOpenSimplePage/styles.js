import styled from "styled-components";

export const DesignFutureContainer = styled.div`
margin: 10rem 0 0 0;
.batata {
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 768px) {
        flex-direction: column;
        margin: 5rem 0;
    }
}

@media (max-width: 768px) {
        margin: 5rem 0;
    }

`

export const Content = styled.div`
margin: 0 10%;
max-width: 40%;


@media (max-width: 768px) {
        max-width: 80%;
        text-align: center;
    }

h4 {
    font-size: 1.6rem;
    margin-bottom: 1.5rem;
    color: #1d3b53;
}

span {
    font-size: 1.2rem;
    color: #5e5f62;
}
`

export const ContentText = styled.div`
margin: 0 0 7rem 0;
`

export const ImageDiv = styled.div`

img {
height: auto;
width: 100%;


}
`