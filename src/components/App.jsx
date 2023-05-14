import { nanoid } from 'nanoid';
import { ContactForm } from './Contact-form/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './Contact-list/ContactList';
import { Container, TitleMajor, TitleMinor } from './App.styled';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux';
import { addContact, deleteContact } from 'store/contactsSlice';
import { setFilter } from 'store/filterSlice';

export const App = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(state => state.contacts.contacts);
    const filter = useSelector(state => state.filter);

    const getFilteredContacts = () => {
        return contacts.filter(contact =>
            contact.name.toLowerCase().includes(filter.toLowerCase())
        );
    };

    const changeFilter = e => dispatch(setFilter(e.target.value));

    const delContact = id => dispatch(deleteContact(id));

    const onFormSubmit = ({ name, number }) => {
        const isNameExist = contacts.find(
            value => value.name.toLowerCase() === name.toLowerCase()
        );
        const isNumberExist = contacts.find(value => value.number === number);
        if (isNameExist) {
            toast(`${name} is already in contacts.`);
            return;
        }
        if (isNumberExist) {
            toast(`${number} is already in contacts as ${isNumberExist.name}.`);
            return;
        }
        dispatch(addContact({ id: nanoid(), name, number }));
    };

    return (
        <Container>
            <TitleMajor>Phonebook</TitleMajor>
            <ContactForm onSubmit={onFormSubmit} />
            <TitleMinor>Contacts</TitleMinor>
            <Filter value={filter} onFilter={changeFilter} />
            <ContactList list={getFilteredContacts()} delContact={delContact} />
            <ToastContainer />
        </Container>
    );
};
