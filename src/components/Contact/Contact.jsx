import {
  ContactButton,
  ContactItem,
  ContactSpan,
  ContactNumber,
} from './Contact.styled';
import PropTypes from 'prop-types';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch } from 'react-redux';
import { deleteLocalContact } from 'redux/contactsSlice';

export const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteLocalContact(contact.id));
    Notify.success('Contact deleted from your phonebook');
  };

  return (
    <ContactItem>
      <ContactSpan>{contact.name}:</ContactSpan>
      <ContactNumber>{contact.number}</ContactNumber>
      <ContactButton onClick={handleDelete}>
        <DeleteIcon />
      </ContactButton>
    </ContactItem>
  );
};

Contact.propTypes = {
  contact: PropTypes.object,
};
