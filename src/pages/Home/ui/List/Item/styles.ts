import styled from 'styled-components';

type LabelProps = {
    isCompleted: boolean;
};

export const Item = styled.li`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    border-bottom: 2px solid ${({ theme }) => theme.colors.darkGrey};

    &:last-child {
        border-bottom: none;
    }
`;

export const Checkbox = styled.input`
    margin-right: 10px;
    cursor: pointer;
`;

export const Label = styled('label').withConfig({
    shouldForwardProp: (prop) => prop !== 'isCompleted'
})<LabelProps>`
    text-decoration: ${({ isCompleted }) =>
        isCompleted ? 'line-through' : 'none'};
    flex: 1;
    max-width: 100%;
    cursor: pointer;
`;

export const DeleteButton = styled.button`
    color: ${({ theme }) => theme.colors.red};
    font-size: 30px;
`;
