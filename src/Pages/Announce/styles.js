import styled from "styled-components";

export const Container = styled.div`
   display: flex;
   flex: 1;
   font-family: Arial, Helvetica, sans-serif;
   margin-bottom: 40px;
   padding: 50px;
    flex-direction: column;
`;

export const MainContainer = styled.div`
    display: flex;
    width: 50%;
    flex-direction: column;
    
`;

export const ImageContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
`;

export const Image = styled.img`
    width: 50%;
    height: 500px;
`;

export const Imageaux = styled.img`
    width: 80%;
    height: 75px;
    border-radius: 10px;
    padding: 6px;
`;

export const SubImageContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Title = styled.h1`
    font-size: 20px;
    margin-bottom: 5px;
    color: var(--light-black);
    font-weight: 600;
`;

export const SubTitle = styled.h2`
    font-size: 16px;
    color: var(--light-black);
    font-weight: lighter;
`;


export const Price = styled.h2`
    font-size: 18px;
    color: var(--light-black);
    font-weight: bold;
    margin-bottom: 10px;
`;

export const Description = styled.p`
    font-size: 18px;
    color: var(--light-black);
    font-weight: lighter;
    width: 90%;
`;

export const ButtonGroup = styled.div`
    display: flex;
    width: 100%;
    justify-content: flex-start;
    align-items: flex-start;
`;


export const SideContainer = styled.div`
    width: 30%;
`;

export const firstpart = styled.div`
    display: flex;
    flex-direction: row;
    margin: 0px;
`;