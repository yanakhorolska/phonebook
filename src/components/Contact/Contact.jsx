import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import './Contact.css';
import PropTypes from 'prop-types';

export const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(contact.id));

  return (
    <div className="List_item">
      <span>
        {contact.name}: <span className="List_span">{contact.number}</span>
      </span>
      <button className="List_button" onClick={handleDelete}>
        delete
      </button>
    </div>
  );
};

Contact.propTypes = {
  contact: PropTypes.object,
};
