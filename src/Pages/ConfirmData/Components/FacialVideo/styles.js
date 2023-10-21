import styled from "styled-components";

export const Container = styled.div`
    
`;

export const VideoContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 10px;
    flex-direction: column;
`;

export const Video = styled.video`
    border-radius: 20px;
`;

export const Image = styled.img`
    width: 150px;
    height: 150px;
`;

export const Canvas = styled.canvas`
    position: absolute;
`;

export const Title = styled.h1`
    font-size: 25px;
    font-family: Arial, Helvetica, sans-serif;
    margin: 40px 0px;
    color: var(--light-black);
    text-align: center;
`;

export const Subtitle = styled.h2`
    font-size: 16px;
    font-family: Arial, Helvetica, sans-serif;
    color: var(--light-black);
    text-align: center;
`;

export const Button = styled.button`
    background-color: var(--orange);
    border: none;
    border-radius: 20px;
    color: white;
    font-size: 20px;
    margin-top: 2rem;
    justify-self: flex-end;
    padding: 15px 50px;
    transition: 0.2s;

    &:hover{
        cursor: pointer;
        background-color: var(--hover-orange);
    }
`;

export const LoadingContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
