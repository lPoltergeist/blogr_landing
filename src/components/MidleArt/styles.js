import styled from "styled-components"

export const MiddleContainer = styled.div`
background: rgb(46,47,66);
background: linear-gradient(90deg, rgba(46,47,66,1) 0%, rgba(46,47,66,1) 50%, rgba(61,64,99,1) 100%);
height: 20rem;
width: 100%;
border-radius: 0 5rem 0 5rem;
display: flex;
float: inline-end;
justify-content: center;
align-items: center;

@media (max-width: 768px) {
    flex-direction: column;
    height: 30rem;
}
`

export const ImageContainer = styled.div`
position: relative;
max-width:35rem;
left: 2rem;

@media (max-width: 768px) {
    top: -10rem;
    left: 0rem;
}

  img {
    height: auto;
    width: 100%;
  
    @media (max-width: 768px) {
   max-width: 100%;
}
  }
   
`

export const TextContainer = styled.div`
max-width: 40rem;
margin-left: 2rem;
float: inline-end;
@media (max-width: 768px) {
        height: auto;
        margin: -12rem 1rem 2rem 1rem;
        text-align: center;
    }
span {
    color: #fff;
    font-size: 1.2rem;
    @media (max-width: 768px) {
        font-size: 0.9rem;
      
    }
}
`

export const Title = styled.div`
color: #fff;
font-size: 1.5rem;
@media (max-width: 768px) {
        font-size: 0.9rem;
        padding-bottom: 0.2rem;
    }
`