import {
  Header,
  HomeButton,
  NavMenu,
  NavItem,
  HeaderLayout,
  ContactsButton,
  NavGreeting,
} from './AppMenu.styled';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import { useAuth } from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/operations';

const AppMenu = () => {
  const { isLoggedIn, user } = useAuth();
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logOut());
  };
  return (
    <HeaderLayout>
      <Header>
        <NavMenu>
          <HomeButton to="/">
            <HomeIcon sx={{ fontSize: 45 }} />
          </HomeButton>
          {isLoggedIn && (
            <ContactsButton to="/contacts">
              <PersonIcon sx={{ fontSize: 45 }} />
            </ContactsButton>
          )}
        </NavMenu>
        {isLoggedIn ? (
          <NavMenu>
            <NavGreeting>Welcome, {user.name}</NavGreeting>
            <NavItem onClick={handleLogOut}>Log out</NavItem>
          </NavMenu>
        ) : (
          <NavMenu>
            <NavItem to="/register">Registration</NavItem>
            <NavItem to="/login">Log in</NavItem>
          </NavMenu>
        )}
      </Header>
    </HeaderLayout>
  );
};
export default AppMenu;
