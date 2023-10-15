import styled from "styled-components";

export const Container = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;
   color: var(--light-black);
`;

export const Card = styled.div`
    width: 80%;
    /* background-color: red; */
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`;

export const Title = styled.h1`
    font-size: 25px;
    font-family: Arial, Helvetica, sans-serif;
    margin: 40px 0px;
    color: var(--light-black);
    text-align: center;
`;

export const InputGroup = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 60%;
    gap: 40px;
`;

export const FacialArea = styled.div`
    background-color: transparent;
    /* border: 1px solid black; */
    border-radius: 20px;
    width: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export const FacialAreaImage = styled.img`
    width: 300px;
`;

export const Button = styled.button`
    background-color: var(--orange);
    border: none;
    border-radius: 20px;
    color: white;
    font-size: 20px;
    /* width: 50%; */
    margin-top: 2rem;
    justify-self: flex-end;
    padding: 15px 50px;
    transition: 0.2s;

    &:hover{
        cursor: pointer;
        background-color: var(--hover-orange);
    }
`;