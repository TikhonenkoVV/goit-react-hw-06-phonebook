import PropTypes from 'prop-types';
import { Button, Item, List } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'store/contactsSlice';
import { setStateFilter, setStatecontacts } from 'store/selector';

export const ContactList = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(setStatecontacts);
    const filter = useSelector(setStateFilter);

    const delContact = id => dispatch(deleteContact(id));

    const list = () => {
        return contacts.filter(contact =>
            contact.name.toLowerCase().includes(filter.toLowerCase())
        );
    };

    return (
        <List>
            {list().map(({ id, name, number }) => {
                return (
                    <Item key={id}>
                        {name}: {number}{' '}
                        <Button type="button" onClick={() => delContact(id)}>
                            Delete
                        </Button>
                    </Item>
                );
            })}
        </List>
    );
};

ContactList.propTypes = {
    list: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
        })
    ),
};
