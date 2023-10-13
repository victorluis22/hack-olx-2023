import styled from "styled-components";

export const Container = styled.div`
    background-color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 60px;
    padding-right: 60px;
    height: 12vh;
    border-bottom: 1px solid gray;

`;

export const Image = styled.img`
    width: 60px;
    
`;

export const UserBadge = styled.div`
    display: flex;
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

export const Avatar = styled.img`
    width: 55px;
    border-radius: 50px;
`;

export const Name = styled.p`
    font-size: 20px;
`;