import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './Contact-form/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './Contact-list/ContactList';
import { Container, TitleMajor, TitleMinor } from './App.styled';
import { load, save } from 'services/storage';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const initialContacts = [
    { id: nanoid(), name: 'Rosie Simpson', number: '459-12-56' },
    { id: nanoid(), name: 'Hermione Kline', number: '443-89-12' },
    { id: nanoid(), name: 'Eden Clements', number: '645-17-79' },
    { id: nanoid(), name: 'Annie Copeland', number: '227-91-26' },
];

const STORAGE_KEY = 'goit-phonebook-contacts';

export const App = () => {
    const [contacts, updContacts] = useState(
        load(STORAGE_KEY) || initialContacts
    );
    const [filter, updFilter] = useState('');

    useEffect(() => save(STORAGE_KEY, contacts), [contacts]);

    const getFilteredContacts = () =>
        contacts.filter(contact =>
            contact.name.toLowerCase().includes(filter.toLowerCase())
        );

    const changeFilter = e => {
        updFilter(e.target.value);
    };

    const delContact = id => updContacts(contacts.filter(el => el.id !== id));

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
        updContacts([...contacts, { id: nanoid(), name, number }]);
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

// export class App extends Component {
//     state = {
//         contacts: initialContacts,
//         filter: '',
//     };

//     componentDidMount() {
//         const loadContacts = load(STORAGE_KEY);
//         if (loadContacts) this.setState({ contacts: loadContacts });
//     }

//     componentDidUpdate(prevState) {
//         if (this.state.contacts !== prevState.contacts) {
//             save(STORAGE_KEY, this.state.contacts);
//         }
//     }
//     onFormSubmit = data => {
//         const isNameExist = this.state.contacts.find(
//             value => value.name.toLowerCase() === data.name.toLowerCase()
//         );
//         const isNumberExist = this.state.contacts.find(
//             value => value.number === data.number
//         );
//         if (isNameExist) {
//             toast(`${data.name} is already in contacts.`);
//             return;
//         }
//         if (isNumberExist) {
//             toast(
//                 `${data.number} is already in contacts as ${isNumberExist.name}.`
//             );
//             return;
//         }
//         this.setState(prevState => ({
//             contacts: [...prevState.contacts, { ...data, id: nanoid() }],
//         }));
//         console.log(this.state.contacts);
//     };

//     getFilteredContacts = () => {
//         const { contacts, filter } = this.state;
//         const normalizedFilter = filter.toLowerCase();
//         return contacts.filter(contact =>
//             contact.name.toLowerCase().includes(normalizedFilter)
//         );
//     };

//     changeFilter = e => {
//         this.setState({ filter: e.target.value });
//     };

//     deleteContact = contactId => {
//         this.setState(prevState => ({
//             contacts: prevState.contacts.filter(
//                 contact => contact.id !== contactId
//             ),
//         }));
//     };

//     render() {
//         const { filter } = this.state;
//         return (
//             <Container>
//                 <TitleMajor>Phonebook</TitleMajor>
//                 <ContactForm onSubmit={this.onFormSubmit} />
//                 <TitleMinor>Contacts</TitleMinor>
//                 <Filter value={filter} onFilter={this.changeFilter} />
//                 <ContactList
//                     list={this.getFilteredContacts()}
//                     delContact={this.deleteContact}
//                 />
//                 <ToastContainer />
//             </Container>
//         );
//     }
// }
