import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    margin-bottom: 20px;
`;

export const Title = styled.span`
    font-size: 18px;
    margin: 20px 0px;
    color: var(--text-color);
    font-weight: bold;
`;

export const Subtitle = styled.span`
    font-size: 16px;
    color: var(--text-color);
`;

export const PhotoArea = styled.div`
    display: flex;
`;

export const Photo = styled.img`
    width: 150px;
    margin-left: 0px;
    margin-right: 20px;
`;

export const Input = styled.input`
    border: 1px solid gray;
    border-radius: 4px;
    font-size: 20px;
    max-width: 58%;
    padding: 10px 0px;
    padding-left: 2%;
    padding-right: 0px;
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