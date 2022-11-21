import { Helmet } from 'react-helmet';
import { RegisterForm } from '../components/RegisterForm/RegisterForm';
import { CssBaseline, Box, Container } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

export default function Register() {
  const theme = createTheme();

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Helmet>
            <title>Registration</title>
          </Helmet>
          <RegisterForm />
        </Box>
      </Container>
    </ThemeProvider>
  );
}
