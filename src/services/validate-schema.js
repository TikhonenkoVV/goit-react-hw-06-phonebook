import * as yup from 'yup';

export const validationSchema = yup.object().shape({
    name: yup
        .string()
        .matches(
            /^[a-zA-Zа-яіїєґА-ЯІЇЄҐ]+(([' -][a-zA-Zа-яіїєґА-ЯІЇЄҐ ])?[a-zA-Zа-яіїєґА-ЯІЇЄҐ]*)*$/,
            {
                message:
                    "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",
                test: value => {
                    return /^[a-zA-Zа-яіїєґА-ЯІЇЄҐ]+(([' -][a-zA-Zа-яіїєґА-ЯІЇЄҐ ])?[a-zA-Zа-яіїєґА-ЯІЇЄҐ]*)*$/.test(
                        value
                    );
                },
            }
        )
        .nullable(true)
        .transform((value, startValue) =>
            startValue.trim() === '' ? null : value
        )
        .required(
            "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        ),

    number: yup
        .string()
        .matches(
            /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
            {
                message:
                    'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +',
                test: value => {
                    return /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/.test(
                        value
                    );
                },
            }
        )
        .required(
            'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
        ),
});
