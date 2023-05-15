import { ContactForm } from './Contact-form/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './Contact-list/ContactList';
import { Container, TitleMajor, TitleMinor } from './App.styled';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const App = () => {
    return (
        <Container>
            <TitleMajor>Phonebook</TitleMajor>
            <ContactForm />
            <TitleMinor>Contacts</TitleMinor>
            <Filter />
            <ContactList />
            <ToastContainer />
        </Container>
    );
};
