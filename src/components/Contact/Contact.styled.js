import styled from 'styled-components';

export const ContactItem = styled('div')`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const ContactButton = styled('button')`
  padding: 8px;
  display: inline-flex;
  font-size: 20px;
  border: none;
  background-color: #dc143c;
  border-radius: 50%;
  cursor: pointer;
  color: white;
`;
export const ContactSpan = styled('span')`
  font-size: 20px;
  font-weight: 400;
  width: 180px;
`;
export const ContactNumber = styled('span')`
  font-weight: 600;
  font-size: 20px;
`;
