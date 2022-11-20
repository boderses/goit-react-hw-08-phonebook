import { React } from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact, fetchContacts } from '../../redux/contacts/thunks';
import ContactItem from './PhonebookItem/PhonebookItem';
import { ContactListBlock } from './PhonebookList.styled';
import * as selectors from '../../redux/contacts/selectors';

const PhonebookList = () => {
  const contacts = useSelector(selectors.contactsDataSelector);
  const filter = useSelector(selectors.filterSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const getVisibleContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const visibleContacts = getVisibleContacts();

  return (
    <ContactListBlock>
      {visibleContacts.map(contact => (
        <ContactItem
          key={contact.id}
          contact={contact}
          onDelete={contactId => dispatch(deleteContact(contactId))}
        />
      ))}
    </ContactListBlock>
  );
};
export default PhonebookList;
