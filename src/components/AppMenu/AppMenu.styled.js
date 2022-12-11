import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderLayout = styled('header')`
  position: fixed;
  width: 100%;
  background-color: #f2e06c;
  box-shadow: 0px 2px 8px 1px grey;
`;

export const Header = styled('div')`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
`;

export const HomeButton = styled(NavLink)`
  color: #fff;
  transition: scale 150ms linear;
  &:hover {
    scale: calc(1.2);
  }
`;
export const ContactsButton = styled(NavLink)`
  color: #fff;
  transition: scale 150ms linear;
  &:hover {
    scale: calc(1.2);
  }
`;
export const NavMenu = styled('div')`
  display: flex;
  align-items: center;
  gap: 20px;
`;
export const NavItem = styled(NavLink)`
  text-decoration: none;
  color: #fff;
  font-size: 20px;
  border: 1px solid #fff;
  padding: 12px;
  padding-top: 9px;
  border-radius: 25px;
  cursor: pointer;
  transition: background-color 250ms linear, color 250ms linear;
  &:hover,
  :focus,
  .active {
    background-color: #fff;
    color: #f2e06c;
  }
`;
export const NavGreeting = styled('p')`
  color: white;
  font-size: 20px;
  font-weight: 600;
`;
