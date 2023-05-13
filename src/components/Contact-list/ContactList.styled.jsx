import styled from '@emotion/styled';

export const List = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 5px;
`;

export const Item = styled.li`
    display: flex;
    align-items: center;
`;

export const Button = styled.button`
    margin-left: auto;
    border-radius: 16px;
    font-size: 16px;
    padding: 5px 15px;
    transition: background-color 250ms, color 250ms;
    &:hover {
        background-color: #ff2f00;
        color: #fff;
    }
`;
