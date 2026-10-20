import {
  RegistrationBox,
  RegistrationForm,
  RegistrationButton,
  RegistrationInput,
  RegistrationLabel,
  RegistrationTitle,
  PasswordBox,
  VisibilityButton,
} from './Registration.styled';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/operations';

const Registration = () => {
  const [passwordType, setPasswordType] = useState('password');
  const dispatch = useDispatch();

  const handleSubmit = async e => {
    e.preventDefault();
    const form = e.currentTarget;
    const result = await dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    if (register.fulfilled.match(result)) form.reset();
  };

  const changePasswordType = e => {
    e.preventDefault();
    if (passwordType === 'text') {
      setPasswordType('password');
      return;
    }
    setPasswordType('text');
  };
  return (
    <RegistrationBox>
      <RegistrationForm onSubmit={handleSubmit}>
        <RegistrationTitle>Sign up</RegistrationTitle>
        <RegistrationLabel>
          Email
          <RegistrationInput required type="email" name="email" autoComplete="email" />
        </RegistrationLabel>
        <RegistrationLabel>
          <PasswordBox>
            <span>Password</span>
            <VisibilityButton type="button" onClick={changePasswordType}>
              {passwordType === 'password' && <VisibilityIcon />}
              {passwordType === 'text' && <VisibilityOffIcon />}
            </VisibilityButton>
          </PasswordBox>
          <RegistrationInput required type={passwordType} name="password" autoComplete="new-password" />
        </RegistrationLabel>
        <RegistrationLabel>
          Name
          <RegistrationInput required type="text" name="name" autoComplete="name" />
        </RegistrationLabel>
        <RegistrationButton type="submit">Sign up</RegistrationButton>
      </RegistrationForm>
    </RegistrationBox>
  );
};

export default Registration;
