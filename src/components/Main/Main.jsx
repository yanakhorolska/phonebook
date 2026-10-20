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
          Your contacts are saved in this browser. Start using your phonebook:
        </Text>
        <ul>
          <ListItem>All your contacts in one place.</ListItem>
          <ListItem>No sign-up or server required</ListItem>
          <ListItem>Contacts persist after refreshing the page</ListItem>
          <ListItem>Search filter</ListItem>
          <ListItem>Nice design</ListItem>
        </ul>
      </TextBox>
    </MainBg>
  );
};

export default Main;
