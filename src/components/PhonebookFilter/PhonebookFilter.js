import { React } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/contacts/reducers';
import { filterSelector } from '../../redux/contacts/selectors';
import { TextField } from '@mui/material';

const PhonebookFilter = () => {
  const getFilter = useSelector(filterSelector);
  const dispatch = useDispatch();
  return (
    <>
      <TextField
        id="standard-search"
        label=" Search contact by name"
        type="search"
        variant="standard"
        value={getFilter}
        onChange={event => dispatch(changeFilter(event.currentTarget.value))}
      />
    </>
  );
};

export default PhonebookFilter;
