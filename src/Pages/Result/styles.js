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
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-left: 30%;
`;

export const Title = styled.h1`
    font-size: 25px;
    text-align: center;
    font-family: Arial, Helvetica, sans-serif;
    margin-bottom: 40px;
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
    padding-top: 10px;
    padding-bottom: 2px;
    /* padding-left: 50px; */
    /* padding-right: 50px; */
    justify-content: center;
    align-items: center;
    gap: 8px;
    border-radius: 20px;
    width: 50%;
`;

export const ItemContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* align-items: center; */
    width: 50%;
    border-bottom: 1px solid rgba(128, 128, 128, 0.4);
`;

export const ItemContainer2 = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* align-items: center; */
    width: 70%;
    border-top: 1px solid rgba(128, 128, 128, 0.4);
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
