import React from "react"; 
// import {StyleSheet, Text, View}from "react-native";
import { Container, Header, Content, Form, Item, Input,Text, Label } from 'native-base';

        export default class Signup extends Component {
          render() {
            return (
              <Container>
                <Header />
                <Content>
                  <Form>
                      <Text>Signup</Text>
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
export default Signup;