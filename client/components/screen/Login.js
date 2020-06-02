import {
  Container,
  Content,
  Form,
  Header,
  Input,
  Item,
  Label,
  Text,
} from 'native-base';

class Login extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Form>
            <Text>Login</Text>
            <Item stackedLabel>
              <Label>Username</Label>
              <Input />
            </Item>
            <Item stackedLabel last>
              <Label>Password</Label>
              <Input />
            </Item>
          </Form>
        </Content>
      </Container>
    );
  }
}

export default Login;
