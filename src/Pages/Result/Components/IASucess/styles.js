import styled from "styled-components";

export const Container = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;
   color: var(--light-black);
   margin: 40px 0px;
`;


export const SideContainer = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   width: 30%;
   /* background-color: red; */
   padding: 0px 20px;
   position: fixed;
   top: 10px;
   left: 10px;
   bottom: 10px;
`;

export const Image = styled.img`
    width: 60px;
    height: 60px;
`;

export const Title = styled.h1`
    font-size: 20px;
    text-align: center;
    font-family: Arial, Helvetica, sans-serif;
    color: var(--light-black);
    font-weight: bold;
`;

export const Subtitle = styled.h2`
    font-size: 17px;
    font-weight: lighter;
`;

export const List = styled.ul`
    background-color: var(--color-neutral-90);
    border-radius: 20px;
    width: 90%;
`;

export const ListItem = styled.li`
    margin: 20px;
    font-weight: bold;
`;
