import './ContactList.css';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import { Contact } from 'components/Contact/Contact';

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const { input } = useSelector(getFilter);

  if (!contacts) {
    return null;
  }
  const visibleContacts = contacts.value.filter(contact =>
    contact.name.toLowerCase().includes(input.toLowerCase())
  );

  return (
    <ul className="List_box">
      {visibleContacts.map(contact => (
        <li className="List_item" key={contact.id}>
          <Contact contact={contact} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.object,
  input: PropTypes.string,
};
