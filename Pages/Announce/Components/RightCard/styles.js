import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
`;

export const Price = styled.div`
    margin-top: 10%;
    width: 80%;
    background-color: #6E0AD6;
    height: 10vh;
    display: flex;
    align-items: center;
    border-radius: 10px;

    &::after{
        content: "";
        position:absolute;
        margin:-20px;
        width: 49.432px;
        height: 49.432px;
        transform:rotate(45deg);
        background-color: #6E0AD6; /* to see where it is */
        border-radius: 10px;
    }
`;

export const PriceNumber = styled.span`
    font-size: 25px;
    color: #fff;
    margin-left: 20%;
`;

export const Title = styled.h1`
    font-size: 24px;
    font-family: Arial, Helvetica, sans-serif;
    text-align: center;
    margin: 30px 0px;
    margin-bottom: 10px;
    color: var(--light-black);
    font-weight: lighter;
`;

export const SubTitle = styled.span`
    font-size: 14px;
    display: flex;
    justify-content: center;
    color: var(--gray);
    margin: 20px 0px;
    font-weight: lighter;
`;

export const UserCard = styled.div`
    background-color: #F9F9F9;
    margin-top: 10%;
    width: 80%;
    border: 2px solid #D8D8D8;
    padding: 20px 0px;
    border-radius: 5px;
`;

export const ButtonRequest = styled.button`
    background-color: #F28000;
    border: 0px;
    border-radius: 20px;
    cursor: pointer;
    color: #fff;
    font-size: 18px;
    padding: 10px 35px;
`;

export const ButtonChat = styled.button`
    background-color: #FDF0E2;
    border: 1px solid #F28000;
    border-radius: 20px;
    cursor: pointer;
    color: #F28000;
    margin: 0px;
    font-size: 18px;
    padding: 10px 35px;
`;

export const ButtonsGroup = styled.div`
    display: flex;
    flex-direction: row;
    gap: 12px;
    margin-top: 5%;
    justify-content: center;
`;
export const VerifyContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
`;
export const SubDescription = styled.p`
    color:  var(--light-black);
    margin: 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
`;
export const SubDescription2 = styled.p`
    color:  #993399;
    margin: 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    cursor: pointer;
`;
export const ImageContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    flex-direction: line;
`;

export const Image = styled.img`
    width: 96px;
    height: 44px;
`;

export const Image2 = styled.img`
    width: 80px;
    height: 80px;
`;

export const ReputationImage = styled.img`
    margin-top: 20px;
    background-color: #F9F9F9;
    width: 80%;
    border: 2px solid #D8D8D8;
    border-radius: 5px;
`;

export const SecurityCard = styled.div`
    background-color: #F9F9F9;
    margin-top: 20px;
    width: 73%;
    border: 2px solid #D8D8D8;
    border-radius: 5px;
    
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    padding: 4%;
`;

export const SecurityContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 10px;
`;