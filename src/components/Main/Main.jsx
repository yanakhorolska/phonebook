import { MainBg } from './Main.styled';
import { HelloTitle, Text, ListItem, TextBox } from './Main.styled';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';

const Main = () => {
  return (
    <MainBg>
      <TextBox>
        <HelloTitle>Hello!</HelloTitle>
        <Text>
          I am your faithful assistant <InsertEmoticonIcon />, your phone book!
          Register and you will have many advantages:
        </Text>
        <ul>
          <ListItem>All your contacts in one place.</ListItem>
          <ListItem>Easy access to the site from any device</ListItem>
          <ListItem>Convenient navigation</ListItem>
          <ListItem>Search filter</ListItem>
          <ListItem>Nice design</ListItem>
        </ul>
      </TextBox>
    </MainBg>
  );
};

export default Main;
