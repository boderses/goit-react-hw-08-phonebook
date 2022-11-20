import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contacts/thunks';
import { nanoid } from 'nanoid';
import { Button, TextField, Box, Typography } from '@mui/material';

const PhonebookForm = ({ classes }) => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const newContact = {
      id: nanoid(),
      name: event.currentTarget.elements.name.value,
      number: event.currentTarget.elements.number.value,
    };
    dispatch(addContact(newContact));
    event.currentTarget.reset();
  };

  return (
    <>
      <Typography component="h1" variant="h5">
        Phonebook
      </Typography>
      <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
        <TextField
          margin="normal"
          required
          fullWidth
          name="name"
          label="Name"
          type="name"
          id="name"
          autoComplete="name"
          autoFocus
        />
        <TextField
          inputProps={{
            pattern:
              '+?d{1,4}?[-.s]?(?d{1,3}?)?[-.s]?d{1,4}[-.s]?d{1,4}[-.s]?d{1,9}',
          }}
          margin="normal"
          type="tel"
          required
          fullWidth
          id="number"
          label="Phone number"
          name="number"
          autoComplete="number"
        />

        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Add contact
        </Button>
      </Box>
    </>
  );
};

export default PhonebookForm;
