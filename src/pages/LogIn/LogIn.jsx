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
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/operations';

const LogIn = () => {
  const [passwordType, setPasswordType] = useState('password');
  const dispatch = useDispatch();

  const changePasswordType = e => {
    e.preventDefault();
    if (passwordType === 'text') {
      setPasswordType('password');
      return;
    }
    setPasswordType('text');
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const form = e.currentTarget;
    const result = await dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    if (logIn.fulfilled.match(result)) form.reset();
  };
  return (
    <RegistrationBox>
      <RegistrationForm onSubmit={handleSubmit}>
        <RegistrationTitle>Log in</RegistrationTitle>
        <RegistrationLabel>
          Email
          <RegistrationInput required name="email" type="email" autoComplete="email" />
        </RegistrationLabel>
        <RegistrationLabel>
          <PasswordBox>
            <span>Password</span>
            <VisibilityButton type="button" onClick={changePasswordType}>
              {passwordType === 'password' && <VisibilityIcon />}
              {passwordType === 'text' && <VisibilityOffIcon />}
            </VisibilityButton>
          </PasswordBox>
          <RegistrationInput required name="password" type={passwordType} autoComplete="current-password" />
        </RegistrationLabel>

        <RegistrationButton type="submit">Log in</RegistrationButton>
      </RegistrationForm>
    </RegistrationBox>
  );
};

export default LogIn;
