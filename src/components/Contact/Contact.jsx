import { useDeleteContactMutation } from 'redux/contactsSlice';
import './Contact.css';
import PropTypes from 'prop-types';

export const Contact = ({ contact }) => {
  const [deleteContact] = useDeleteContactMutation();

  const handleDelete = async () => {
    try {
      await deleteContact(contact.id);
    } catch (error) {}
  };

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
