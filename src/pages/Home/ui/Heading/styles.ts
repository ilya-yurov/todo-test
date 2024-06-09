import styled from 'styled-components';

export const Input = styled.input`
    width: 100%;
    padding: 10px;
    font-size: 18px;
`;

export const Form = styled.form`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Button = styled.button`
    padding: 10px;
    background-color: ${({ theme }) => theme.colors.darkBlue};
    color: ${({ theme }) => theme.colors.white};
    border-radius: 8px;
    margin: 5px;
`;
