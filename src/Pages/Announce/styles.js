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
    text-align: center;
    font-family: Arial, Helvetica, sans-serif;
    margin: 40px 0px;
    /* color: var(--light-black); */
    font-weight: lighter;
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
export const UserBadge = styled.div`
    background-color: rgba(128, 128, 128, 0.07);
    display: flex;
    flex-direction: column;
    padding-top: 2px;
    padding-bottom: 2px;
    padding-left: 50px;
    padding-right: 50px;
    justify-content: center;
    align-items: center;
    gap: 8px;
    border: 2px solid gray;
    border-radius: 40px;
`;

export const ItemContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* align-items: center; */
    width: 50%;
    border-bottom: 1px solid rgba(128, 128, 128, 0.4);
`;
