import {
  RegistrationBox,
  RegistrationForm,
  RegistrationButton,
  RegistrationInput,
  RegistrationLabel,
  RegistrationTitle,
  PasswordBox,
  VisibilityButton,
} from '../Registration/Registration.styled';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useState } from 'react';

const LogIn = () => {
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
        <RegistrationTitle>Log in</RegistrationTitle>
        <RegistrationLabel htmlFor="">
          Email
          <RegistrationInput type="text" />
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

        <RegistrationButton type="submit">Log in</RegistrationButton>
      </RegistrationForm>
    </RegistrationBox>
  );
};

export default LogIn;
