import styled from '@emotion/styled';
import { Form, Field } from 'formik';

export const FormikForm = styled(Form)`
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding-bottom: 30px;
`;

export const Label = styled.label`
    display: flex;
    flex-direction: column;
    gap: 5px;
    font-size: 22px;
    transition: color 250ms;
    &:hover,
    &:focus {
        color: #3abb24;
    }
    &:nth-of-type(2) {
        margin-bottom: 30px;
    }
`;

export const Input = styled(Field)`
    display: block;
    margin: 0;
    padding: 5px 15px;
    border-radius: 16px;
    font-size: 18px;
`;

export const SubmitButton = styled.button`
    height: 40px;
    border-radius: 20px;
    font-size: 18px;
    transition: background-color 250ms, color 250ms;
    &:hover,
    &:focus {
        background-color: #3abb24;
        color: #fff;
    }
`;
