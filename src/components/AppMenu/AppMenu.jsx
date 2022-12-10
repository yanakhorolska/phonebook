import {
  Header,
  HomeButton,
  NavMenu,
  NavItem,
  HeaderLayout,
  ContactsButton,
} from './AppMenu.styled';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';

const AppMenu = () => {
  return (
    <HeaderLayout>
      <Header>
        <NavMenu>
          <HomeButton to="/">
            <HomeIcon sx={{ fontSize: 45 }} />
          </HomeButton>
          <ContactsButton to="/contacts">
            <PersonIcon sx={{ fontSize: 45 }} />
          </ContactsButton>
        </NavMenu>
        <NavMenu>
          <NavItem to="/register">Registration</NavItem>
          <NavItem to="/login">Log in</NavItem>
          {/* <NavItem>Log out</NavItem> */}
        </NavMenu>
      </Header>
    </HeaderLayout>
  );
};
export default AppMenu;
