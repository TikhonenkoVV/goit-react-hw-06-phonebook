import styled from '@emotion/styled';

export const Label = styled.label`
    display: flex;
    flex-direction: column;
    gap: 5px;
    margin-bottom: 15px;
    transition: color 250ms;
    &:hover,
    &:focus {
        color: #3abb24;
    }
`;

export const Input = styled.input`
    display: block;
    margin: 0;
    padding: 5px 15px;
    border-radius: 16px;
    font-size: 18px;
`;
