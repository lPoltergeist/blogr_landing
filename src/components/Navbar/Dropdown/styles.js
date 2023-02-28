import styled from "styled-components";

export const ProductContainer = styled.div`
   box-shadow: 0 2px 20px rgba(0,0,0,0.2);
    background-color: #fff;
    color: black;
    width: 130px;
    border-radius: 5px;
    position: absolute;
    top: 100px;
    left: 240px;

    cursor: default;

    @media (max-width: 1000px) {
        left: 190px;
    }
     
    .Dropmenu{
    list-style: none;
    text-align: start;
    display: flex;
    flex-direction: column;
    margin: 0.3rem auto;
    width: 80%;

    justify-content: center;
    height: 100%;
    }

    a {
        font-size: 0.9rem;
        font-family: "montserrat", sans-serif;
        margin: 0.1rem 0;
        font-weight: 300;
        cursor:pointer;

        transition: ease-in-out 0.2s;

        :hover {
            font-weight: bold;
        }
    }

`

export const CompanyContainer = styled.div`
   box-shadow: 0 2px 20px rgba(0,0,0,0.2);
    background-color: #fff;
    color: black;
    width: 130px;
    border-radius: 5px;
    position: absolute;
    top: 100px;
    left: 350px;

    cursor: default;

    @media (max-width: 1000px) {
        left: 300px;
    }

    .Dropmenu{
    list-style: none;
    text-align: start;
    display: flex;
    flex-direction: column;
    margin: 0.3rem auto;
    width: 80%;

    justify-content: center;
    height: 100%;
    }

    a {
        font-size: 0.9rem;
        font-family: "montserrat", sans-serif;
        margin: 0.1rem 0;
        font-weight: 300;
        cursor:pointer;

        transition: ease-in-out 0.2s;

        :hover {
            font-weight: bold;
        }
    }

`

export const ConnectContainer = styled.div`
   box-shadow: 0 2px 20px rgba(0,0,0,0.2);
    background-color: #fff;
    color: black;
    width: 130px;
    border-radius: 5px;
    position: absolute;
    top: 100px;
    left: 480px;

    cursor: default;

    @media (max-width: 1000px) {
        left: 430px;
    }

    .Dropmenu{
    list-style: none;
    text-align: start;
    display: flex;
    flex-direction: column;
    margin: 0.3rem auto;
    width: 80%;

    justify-content: center;
    height: 100%;
    }

    a {
        font-size: 0.9rem;
        font-family: "montserrat", sans-serif;
        margin: 0.1rem 0;
        font-weight: 300;
        cursor:pointer;

        transition: ease-in-out 0.2s;

        :hover {
            font-weight: bold;
        }
    }

`

