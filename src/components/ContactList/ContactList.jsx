import './ContactList.css';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { getFilter } from 'redux/selectors';
import { Contact } from 'components/Contact/Contact';
import { useGetContactsQuery } from 'redux/contactsSlice';

const ContactList = () => {
  const { data, error, isLoading } = useGetContactsQuery();
  const { filter } = useSelector(getFilter);

  if (!data) {
    return null;
  }
  const visibleContacts = data.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      {!error && isLoading && <div>Loading</div>}
      <ul className="List_box">
        {visibleContacts.map(contact => (
          <li className="List_item" key={contact.id}>
            <Contact contact={contact} />
          </li>
        ))}
      </ul>
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
