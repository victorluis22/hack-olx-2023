import styled from "styled-components";

export const Container = styled.div`
   display: flex;
   justify-content: left;
   align-items: center;
   flex-direction: row;
   color: var(--light-black);
`;

export const Title = styled.h1`
    font-size: 25px;
    font-family: Arial, Helvetica, sans-serif;
    margin: 40px 0px;
    /* color: var(--light-black); */
    font-weight: lighter;
`;

export const Subtitle = styled.h2`
    font-size: 17px;
    font-weight: lighter;
`;


export const Image = styled.img`
    width: 75px;
`;

export const MinorImage = styled.div`
    width: 50px;
`;