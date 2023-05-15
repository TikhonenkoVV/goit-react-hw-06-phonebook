import { FormikForm, Label, Input, SubmitButton } from './ContactForm.styled';
import { Formik, ErrorMessage } from 'formik';
import { validationSchema } from 'services/validate-schema';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'store/contactsSlice';
import { toast } from 'react-toastify';
import { setStatecontacts } from 'store/selector';

export const ContactForm = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(setStatecontacts);

    return (
        <Formik
            validationSchema={validationSchema}
            initialValues={{
                name: '',
                number: '',
            }}
            onSubmit={(values, { resetForm }) => {
                const isNameExist = contacts.find(
                    val => val.name.toLowerCase() === values.name.toLowerCase()
                );
                const isNumberExist = contacts.find(
                    val => val.number === values.number
                );
                if (isNameExist) {
                    toast(`${values.name} is already in contacts.`);
                    return;
                }
                if (isNumberExist) {
                    toast(
                        `${values.number} is already in contacts as ${isNumberExist.name}.`
                    );
                    return;
                }
                dispatch(addContact(values));
                resetForm();
            }}
        >
            {({ handleSubmit, handleChange }) => {
                return (
                    <FormikForm onSubmit={handleSubmit}>
                        <Label>
                            Name
                            <Input
                                type="text"
                                name="name"
                                placeholder="Enter contact name"
                                onChange={val => {
                                    handleChange(val);
                                }}
                            />
                            <ErrorMessage name="name" />
                        </Label>
                        <Label>
                            Number
                            <Input
                                type="tel"
                                name="number"
                                placeholder="Enter contact number"
                                onChange={val => {
                                    handleChange(val);
                                }}
                            />
                            <ErrorMessage name="number" />
                        </Label>
                        <SubmitButton type="submit">Add contact</SubmitButton>
                    </FormikForm>
                );
            }}
        </Formik>
    );
};
