import styled from 'styled-components';

export const FilterBox = styled('div')`
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;
`;
export const FilterTitle = styled('h2')`
  font-weight: 600;
  font-size: 20px;
`;
export const FilterInput = styled('input')`
  padding: 10px 10px;
  border: none;
  font-size: 20px;
  box-shadow: 0px 2px 18px 0px grey;
  border-radius: 25px;
  &:focus {
    outline: none;
  }
`;
