import { useSelector } from 'react-redux';
import PhonebookForm from '../components/PhonebookForm/PhonebookForm';
import PhonebookFilter from '../components/PhonebookFilter/PhonebookFilter';
import PhonebookList from '../components/PhonebookList/PhonebookList';
import Loader from '../components/Loader/Loader';
import * as selectors from '../redux/contacts/selectors';
import { CssBaseline, Box, Typography, Container } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const Contacts = () => {
  const theme = createTheme();

  const loading = useSelector(selectors.contactsLoadingSelector);
  const error = useSelector(selectors.contactsErrorSelector);
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
          {loading && !error && <Loader />}
          {!error && (
            <>
              <PhonebookForm />
              <Typography component="h1" variant="h5">
                Contacts
              </Typography>
              <PhonebookFilter />

              <PhonebookList />
            </>
          )}
          {error && <h1>Something is wrong</h1>}
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default Contacts;
