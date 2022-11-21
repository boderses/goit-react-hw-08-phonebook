import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { logIn } from '../../redux/auth/thunks';
import { useForm, Controller } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Avatar, Button, TextField, Box, Typography } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { StyledError } from './LoginForm.styled';

const schema = yup.object({
  email: yup
    .string()
    .email('Not a proper email')
    .required('This field is required'),
  password: yup.string().required('This field is required'),
});

export const LoginForm = () => {
  const dispatch = useDispatch();

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });
  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSubmitSuccessful]);

  const onSubmitHandler = values => {
    dispatch(logIn(values));
  };

  return (
    <>
      <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Sign in
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit(onSubmitHandler)}
        noValidate
        sx={{ mt: 1 }}
      >
        <Controller
          render={({ field }) => (
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              {...field}
            />
          )}
          name="email"
          control={control}
          defaultValue={''}
        />
        {errors.email && <StyledError>{errors.email.message}</StyledError>}
        <Controller
          render={({ field }) => (
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              {...field}
            />
          )}
          name="password"
          control={control}
          defaultValue={''}
        />
        {errors.password && (
          <StyledError>{errors.password.message}</StyledError>
        )}

        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Sign In
        </Button>
      </Box>
    </>
  );
};
