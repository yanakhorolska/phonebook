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
// Legacy login/logout components are kept in the repository but unused in local mode.

const AppMenu = () => (
  <HeaderLayout>
    <Header>
      <NavMenu>
        <HomeButton to="/"><HomeIcon sx={{ fontSize: 45 }} /></HomeButton>
        <ContactsButton to="/contacts"><PersonIcon sx={{ fontSize: 45 }} /></ContactsButton>
      </NavMenu>
      <NavMenu>
        <NavItem to="/contacts">My contacts</NavItem>
      </NavMenu>
    </Header>
  </HeaderLayout>
);
export default AppMenu;
