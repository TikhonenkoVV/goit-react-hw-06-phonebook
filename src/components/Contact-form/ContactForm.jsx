import { Component } from 'react';
import { FormikForm, Label, Input, SubmitButton } from './ContactForm.styled';
import { Formik, ErrorMessage } from 'formik';
import { validationSchema } from 'services/validate-schema';

const initialState = {
    name: '',
    number: '',
};

export class ContactForm extends Component {
    onFormSubmit = (values, { resetForm }) => {
        this.props.onSubmit(values);
        resetForm();
    };

    onleInputChange = e => {
        const { name, value } = e.currentTarget;
        this.setState({ [name]: value });
    };

    render() {
        return (
            <Formik
                validationSchema={validationSchema}
                initialValues={initialState}
                onSubmit={this.onFormSubmit}
            >
                <FormikForm>
                    <Label>
                        Name
                        <Input
                            type="text"
                            name="name"
                            placeholder="Enter contact name"
                        />
                        <ErrorMessage name="name" />
                    </Label>
                    <Label>
                        Number
                        <Input
                            type="tel"
                            name="number"
                            placeholder="Enter contact number"
                        />
                        <ErrorMessage name="number" />
                    </Label>
                    <SubmitButton type="submit">Add contact</SubmitButton>
                </FormikForm>
            </Formik>
        );
    }
}
