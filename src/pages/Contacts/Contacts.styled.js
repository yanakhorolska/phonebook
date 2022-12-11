import styled from 'styled-components';

export const ContactsBox = styled('div')`
  padding: 158px 60px 0;
  display: flex;
  justify-content: space-around;
`;

export const ListBox = styled('div')`
  gap: 30px;
  padding: 40px;
  border-radius: 15px;
  backdrop-filter: blur(50px);
  display: flex;
  flex-direction: column;
  box-shadow: 0px 2px 8px 1px grey;
  max-height: 600px;
  overflow-y: auto;
`;
