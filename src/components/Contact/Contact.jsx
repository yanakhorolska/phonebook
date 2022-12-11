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
import { deleteContact } from 'redux/operations';

export const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = async () => {
    try {
      await dispatch(deleteContact(contact.id));
      Notify.success('Contact was delete from your phonebook');
    } catch (error) {
      Notify.failure('Something wrong. Please, try again');
    }
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
