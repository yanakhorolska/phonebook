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

const Registration = () => {
  const [passwordType, setPasswordType] = useState('password');

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
      <RegistrationForm>
        <RegistrationTitle>Sign up</RegistrationTitle>
        <RegistrationLabel htmlFor="">
          Email
          <RegistrationInput type="email" />
        </RegistrationLabel>
        <RegistrationLabel htmlFor="">
          <PasswordBox>
            <span>Password</span>
            <VisibilityButton onClick={changePasswordType}>
              {passwordType === 'password' && <VisibilityIcon />}
              {passwordType === 'text' && <VisibilityOffIcon />}
            </VisibilityButton>
          </PasswordBox>
          <RegistrationInput type={passwordType} />
        </RegistrationLabel>
        <RegistrationLabel htmlFor="">
          Name
          <RegistrationInput type="text" />
        </RegistrationLabel>
        <RegistrationButton type="submit">Sign up</RegistrationButton>
      </RegistrationForm>
    </RegistrationBox>
  );
};

export default Registration;
