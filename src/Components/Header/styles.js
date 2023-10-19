import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    padding: 0px 40px;
    z-index: 4;
`;

export const Image = styled.img`
    width: 60px;
    &:hover{
        cursor: pointer;
    }
`;

export const UserBadge = styled.div`
    display: flex;
    padding: 0px 40px;
    justify-content: center;
    align-items: center;
    gap: 8px;
    border: 2px solid var(--color-neutral-90);;
    border-radius: 40px;
    margin: 10px 0px;
`;

export const Avatar = styled.img`
    width: 35px;
    border-radius: 50px;
`;

export const Name = styled.p`
    font-size: 18px;
`;