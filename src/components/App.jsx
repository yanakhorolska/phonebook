import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';

import './App.css';

const App = () => {
  return (
    <div className="Phonebook_box">
      <h1 className="Phonebook_title">Wizard's phonebook</h1>
      <ContactForm />
      <h2 className="Phonebook_second-title">Contacts</h2>
      <Filter />

      <ContactList />
    </div>
  );
};
export default App;
