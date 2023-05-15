import { Input, Label } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'store/filterSlice';
import { setStateFilter } from 'store/selector';

export const Filter = () => {
    const dispatch = useDispatch();
    const filter = useSelector(setStateFilter);

    const changeFilter = e => dispatch(setFilter(e.target.value));

    return (
        <Label>
            Find contact by name
            <Input
                type="text"
                name="name"
                placeholder="Enter contact name"
                value={filter}
                onChange={changeFilter}
                pattern="^[a-zA-Zа-яіїєґА-ЯІЇЄҐ]+(([' -][a-zA-Zа-яіїєґА-ЯІЇЄҐ ])?[a-zA-Zа-яіїєґА-ЯІЇЄҐ]*)*$"
            />
        </Label>
    );
};
