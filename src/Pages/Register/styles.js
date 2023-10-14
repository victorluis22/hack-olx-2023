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
    /* color: var(--light-black); */
`;

export const SubtitleArea = styled.div`
    
`;

export const Subtitle = styled.h2`
    font-size: 17px;
`;

export const Card = styled.div`
    border-radius: 4px;
    border: 2px solid var(--color-neutral-90);
    width: 80%;
    padding: 30px 40px;
`;

export const Button = styled.button`
    background-color: #F28000;
    border: none;
    border-radius: 10px;
    color: white;
    font-size: 20px;
    width: 50%;
    margin-top: 2rem;
    align-self: center;
`;

export const Link = styled.a`
    text-decoration: none;
    color: white;
`;