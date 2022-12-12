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

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };
  return (
    <RegistrationBox>
      <RegistrationForm onSubmit={handleSubmit}>
        <RegistrationTitle>Log in</RegistrationTitle>
        <RegistrationLabel htmlFor="">
          Email
          <RegistrationInput required name="email" type="text" />
        </RegistrationLabel>
        <RegistrationLabel htmlFor="">
          <PasswordBox>
            <span>Password</span>
            <VisibilityButton onClick={changePasswordType}>
              {passwordType === 'password' && <VisibilityIcon />}
              {passwordType === 'text' && <VisibilityOffIcon />}
            </VisibilityButton>
          </PasswordBox>
          <RegistrationInput required name="password" type={passwordType} />
        </RegistrationLabel>

        <RegistrationButton type="submit">Log in</RegistrationButton>
      </RegistrationForm>
    </RegistrationBox>
  );
};

export default LogIn;
