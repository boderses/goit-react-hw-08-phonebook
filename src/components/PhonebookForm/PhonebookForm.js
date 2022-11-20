import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contacts/thunks';
import { nanoid } from 'nanoid';
import {
  ContactAddForm,
  LableForm,
  InputForm,
  ButtonForm,
} from './PhonebookForm.styled';

const PhonebookForm = () => {
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
    <div>
      <ContactAddForm onSubmit={handleSubmit}>
        <LableForm>
          Name
          <InputForm
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </LableForm>
        <LableForm>
          Phone number
          <InputForm
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </LableForm>

        <ButtonForm type="submit">Add contact</ButtonForm>
      </ContactAddForm>
    </div>
  );
};

export default PhonebookForm;
