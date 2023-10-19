import styled from "styled-components";

export const Container = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;
   color: var(--light-black);
`;

export const Title = styled.h1`
    font-size: 25px;
    font-family: Arial, Helvetica, sans-serif;
    margin: 40px 0px;
    color: var(--light-black);
`;

export const SubtitleArea = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 12px;
`;

export const Subtitle = styled.h2`
    font-size: 17px;
`;

export const Card = styled.div`
    border-radius: 4px;
    border: 2px solid var(--color-neutral-90);
    width: 80%;
    padding: 30px 40px;
    display: grid;
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