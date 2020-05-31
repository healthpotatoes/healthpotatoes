import React from "react";
import {
    Container,
    Header,
    Content,
    Form,
    Item,
    Input,
    Text,
    Button,
    Label,
  } from 'native-base';
  
  export default class SignupPage extends Component {
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
              <Button rounded info>
                <Text>Login</Text>
              </Button>
            </Form>
          </Content>
        </Container>
      );
    }
  }
  