import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    padding: 0px 40px;
    z-index: 4;
    height: 81px;
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

    &:hover{
        cursor: pointer;
    }
`;

export const Avatar = styled.img`
    width: 35px;
    border-radius: 50px;
`;

export const Name = styled.p`
    font-size: 18px;
`;

export const Menu = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: absolute;
    background-color: var(--gray);
    top: 81px;
    right: 50px;
`;

export const MenuOptions = styled.p`
    font-size: 20px;
    padding: 0px 40px;
    font-weight: bold;

    &:hover{
        color: var(--white);
        transition: 0.2s;
        cursor: pointer;
    }
`;