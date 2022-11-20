import { useDispatch } from 'react-redux';
import { useForm, Controller } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { addContact } from '../../redux/contacts/thunks';
import { Button, TextField, Box, Typography } from '@mui/material';
import { useEffect } from 'react';

const schema = yup.object({
  name: yup.string().required('This field is required'),
  number: yup
    .number()
    .typeError('Value must be a positive number')
    .positive('Value must be a positive number')
    .integer('Value must be an integer')
    .required('This field is required'),
});

const PhonebookForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });
  const dispatch = useDispatch();

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSubmitSuccessful]);

  const onSubmitHandler = values => {
    dispatch(addContact(values));
  };

  return (
    <>
      <Typography component="h1" variant="h5">
        Phonebook
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit(onSubmitHandler)}
        sx={{ mt: 1 }}
      >
        <Controller
          render={({ field }) => (
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
              {...field}
            />
          )}
          name="name"
          control={control}
          defaultValue={''}
        />
        {errors.name && <p>{errors.name.message}</p>}
        <Controller
          render={({ field }) => (
            <TextField
              margin="normal"
              type="tel"
              required
              fullWidth
              id="number"
              label="Phone number"
              name="number"
              autoComplete="number"
              {...field}
            />
          )}
          name="number"
          control={control}
          defaultValue={''}
        />
        {errors.number && <p>{errors.number.message}</p>}

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
