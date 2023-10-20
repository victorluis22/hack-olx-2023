import styled from "styled-components";

export const Container = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;
   color: var(--light-black);
   margin: 40px 0px;
   position: fixed;
   top: 50px;
   left: 50px;
   bottom: 10px;
   width: 30%;
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

export const SubTitle = styled.h2`
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
