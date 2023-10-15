import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border: 1px solid var(--orange);
    border-radius: 50px;
    padding: 1px 40px;
    margin-right: 20px;
    font-weight: bold;

    transition: 0.2s;
    color: var(--orange);

    &:hover{
        cursor: pointer;
        border: 1px solid transparent;
    }

`;

// export const Icon = styled()`

// `;

export const Text = styled.p`
    
    font-size: 14px;
`;