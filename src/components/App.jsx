// import ContactForm from './ContactForm';
// import Filter from './Filter';
// import ContactList from './ContactList';
import { Route, Routes } from 'react-router-dom';
import Layout from 'components/Layout';
import Main from 'components/Main';
import Registration from '../pages/Registration';
import LogIn from '../pages/LogIn';
import './App.css';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />}></Route>
          <Route path="login" element={<LogIn />}></Route>
          <Route path="register" element={<Registration />}></Route>
          <Route path="contacts" element={<div>hello</div>}></Route>
        </Route>
      </Routes>
    </>
    // <div className="Phonebook_box">
    //   <h1 className="Phonebook_title">Wizard's phonebook</h1>
    //   <ContactForm />
    //   <h2 className="Phonebook_second-title">Contacts</h2>
    //   <Filter />

    //   <ContactList />
    // </div>
  );
};
export default App;
