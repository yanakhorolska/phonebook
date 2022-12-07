import './ContactForm.css';
import PropTypes from 'prop-types';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import {
  useAddContactMutation,
  useGetContactsQuery,
} from 'redux/contactsSlice';

const ContactForm = () => {
  const [addContact] = useAddContactMutation();
  const { data } = useGetContactsQuery();

  const handleSubmit = async e => {
    e.preventDefault();
    const form = e.target;
    const name = form.elements.name.value;
    const number = form.elements.number.value;
    const contactData = { name, number };
    form.reset();
    if (data.find(contact => contact.name === name)) {
      Notify.warning(`${name} is already in contacts`);
      return false;
    }
    try {
      await addContact(contactData);
      Notify.success('Contact was added to your phonebook');
    } catch (error) {
      Notify.failure('Something wrong. Please, try again');
    }
  };

  return (
    <>
      <form className="Form" onSubmit={handleSubmit} autoComplete="off">
        <label className="Form_label">
          Name
          <input
            className="Form_input"
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label className="Form_label">
          Number
          <input
            className="Form_input"
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button className="Form_button" type="submit">
          Add contact
        </button>
      </form>
    </>
  );
};

export default ContactForm;

ContactForm.propTypes = {
  contacts: PropTypes.object,
};
