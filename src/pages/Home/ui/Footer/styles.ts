import styled from 'styled-components';

type FilterProps = {
    isActive: boolean;
};

export const FooterContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 10px;
    border-top: 2px solid ${({ theme }) => theme.colors.darkGrey};
`;

export const FilterButton = styled('button').withConfig({
    shouldForwardProp: (prop) => prop !== 'isActive'
})<FilterProps>`
    font-weight: ${({ isActive }) => (isActive ? 'bold' : 'normal')};
    margin: 0 5px;
`;

export const ClearButton = styled.button`
    color: ${({ theme }) => theme.colors.red};
`;
