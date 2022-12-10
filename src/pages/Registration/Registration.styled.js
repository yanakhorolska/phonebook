import styled from 'styled-components';

export const RegistrationBox = styled('div')`
  padding-top: 158px;
`;
export const RegistrationForm = styled('form')`
  padding: 40px;

  border-radius: 15px;
  margin: 0 auto;
  width: 450px;
  backdrop-filter: blur(50px);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  box-shadow: 0px 2px 8px 1px grey;
`;

export const RegistrationTitle = styled('h2')`
  text-align: center;
  font-size: 30px;
  margin: 0;
`;
export const RegistrationInput = styled('input')`
  padding: 10px 10px;
  border: none;
  font-size: 20px;
  box-shadow: 0px 2px 18px 0px grey;
  border-radius: 25px;
  &:focus {
    outline: none;
  }
`;
export const RegistrationLabel = styled('label')`
  display: flex;
  flex-direction: column;
  font-size: 20px;
  width: 350px;
  gap: 10px;
`;
export const RegistrationButton = styled('button')`
  padding: 15px 25px;
  font-size: 20px;
  border: none;
  background-color: #f2e06c;
  border-radius: 25px;
  cursor: pointer;
  color: white;
`;
export const PasswordBox = styled('div')`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const VisibilityButton = styled('button')`
  background-color: transparent;
  border: none;
  padding: 0;
  cursor: pointer;
`;
