import styled from "styled-components"

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

export const TextArea = styled.textarea`
    border: 1px solid gray;
    border-radius: 4px;
    font-size: 20px;
    max-width: 58%;
    padding: 10px 0px 40px 0px;
    padding-left: 2%;
`;