import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import ContactForm from '../../components/ContactForm';
import { ContactsBox, ListBox } from './Contacts.styled';
import 'simplebar-react/dist/simplebar.min.css';

const Contacts = () => {
  return (
    <ContactsBox>
      <ContactForm />
      <ListBox>
        <Filter />
        <ContactList />
      </ListBox>
    </ContactsBox>
  );
};
export default Contacts;
