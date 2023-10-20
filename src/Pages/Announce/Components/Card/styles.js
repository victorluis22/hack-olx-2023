import styled from "styled-components";

export const Container = styled.div`
    width: 300px;
    display: flex;
    justify-content: end;
    align-items: center;
    flex-direction: column;
    height: 400px;
`;

export const Image = styled.img`
    max-width: 150px;
    border-radius: 10px;
`;

export const Title = styled.p`
    color: #1A1D23;
    font-size: 20px;
`;

export const Value = styled.p`
    font-weight: bold;
    font-size: 30px;
`;

export const SmartContainer = styled.div`
    width: 50%;
    max-height: 100px;
    background-color: black;
    border: 2px solid #9027B0;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    padding: 10px;

    `;

export const SmartTitle = styled.span`
    font-size: 15px;
    color: white;
`;

export const SmartLogo = styled.img`
    width: 100px;
`;