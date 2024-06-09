import styled from 'styled-components';

export const List = styled.ul`
    height: 400px;
    border-top: 2px solid ${({ theme }) => theme.colors.darkGrey};
    overflow-y: auto;
`;
