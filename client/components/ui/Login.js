import { Container, Header, Content, Form, Item, Input,Text, Label } from 'native-base';

        export default class Login extends Component {
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