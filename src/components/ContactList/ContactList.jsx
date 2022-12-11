import { ContactsList } from './ContactList.styled';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter, selectContacts } from 'redux/selectors';
import { Contact } from 'components/Contact/Contact';
import { fetchContacts } from 'redux/operations';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const { filter } = useSelector(getFilter);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  if (!contacts) {
    return null;
  }
  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <ContactsList>
        {visibleContacts.map(contact => (
          <li key={contact.id}>
            <Contact contact={contact} />
          </li>
        ))}
      </ContactsList>
    </div>
  );
};

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.object,
  input: PropTypes.string,
};

// import './ContactList.css';
// import PropTypes from 'prop-types';
// import { useSelector } from 'react-redux';
// import { getContacts, getFilter } from 'redux/selectors';
// import { Contact } from 'components/Contact/Contact';

// const ContactList = () => {
//   const contacts = useSelector(getContacts);
//   const { filter } = useSelector(getFilter);

//   if (!contacts) {
//     return null;
//   }
//   const visibleContacts = contacts.filter(contact =>
//     contact.name.toLowerCase().includes(filter.toLowerCase())
//   );

//   return (
//     <ul className="List_box">
//       {visibleContacts.map(contact => (
//         <li className="List_item" key={contact.id}>
//           <Contact contact={contact} />
//         </li>
//       ))}
//     </ul>
//   );
// };

// export default ContactList;

// ContactList.propTypes = {
//   contacts: PropTypes.object,
//   input: PropTypes.string,
// };
