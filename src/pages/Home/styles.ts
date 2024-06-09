import styled from 'styled-components';

export const Header = styled.h1`
    font-size: 56px;
    text-align: center;
    padding: 20px 0;
    color: ${({ theme }) => theme.colors.darkBlue};
`;

export const Container = styled.div`
    border: 2px solid ${({ theme }) => theme.colors.darkGrey};
    border-radius: 8px;
    overflow: hidden;
    width: 500px;
    background-color: ${({ theme }) => theme.colors.white};
`;

export const Wrapper = styled.div`
    background-color: ${({ theme }) => theme.colors.lightGrey};
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
