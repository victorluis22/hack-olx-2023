import styled from "styled-components";

export const Container = styled.div`
   display: flex;
   flex-direction: column;
`;

export const Label = styled.p`
    font-size: 18px;
    margin: 20px 0px;
    color: var(--text-color);
`;

export const Input = styled.select`
    border-radius: 4px;
    font-size: 20px;
    max-width: 60%;
    padding: 10px 0px;
    padding-left: 10px;
`;