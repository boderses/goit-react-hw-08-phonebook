import { Helmet } from 'react-helmet';
import { LoginForm } from '../components/LoginForm/LoginForm';
import { CssBaseline, Box, Container } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

export default function Login() {
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
            <title>Login</title>
          </Helmet>
          <LoginForm />
        </Box>
      </Container>
    </ThemeProvider>
  );
}
