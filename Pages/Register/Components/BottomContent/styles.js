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
    align-items: center
`;

export const Photo = styled.img`
    width: 50px;
    margin-left: 0px;
    margin-right: 20px;
`;

export const SecondaryPhoto = styled.img`
    width: 200px;
    margin-top: 20px;
    margin-bottom: 20px;
`;

export const Input = styled.input`
    border: 1px solid gray;
    border-radius: 4px;
    font-size: 20px;
    max-width: 58%;
    padding: 10px 0px;
    padding-left: 2%;
    padding-right: 0px;
    margin-top: 10px;
    margin-bottom: 10px;
`;
