import { useSelector } from 'react-redux';
import PhonebookForm from '../../components/PhonebookForm/PhonebookForm';
import PhonebookFilter from '../../components/PhonebookFilter/PhonebookFilter';
import PhonebookList from '../../components/PhonebookList/PhonebookList';
import Loader from '../../components/Loader/Loader';
import * as selectors from '../../redux/contacts/selectors';
import { StyledContainer } from './Contacts.styled.js';

const Contacts = () => {
  const loading = useSelector(selectors.contactsLoadingSelector);
  const error = useSelector(selectors.contactsErrorSelector);
  return (
    <>
      {loading && !error && <Loader />}
      {!error && (
        <StyledContainer>
          <h1>Phonebook</h1>
          <PhonebookForm />
          <h2>Contacts</h2>
          <PhonebookFilter />
          <PhonebookList />
        </StyledContainer>
      )}
      {error && <h1>Something is wrong</h1>}
    </>
  );
};

export default Contacts;
