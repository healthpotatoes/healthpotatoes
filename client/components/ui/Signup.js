import React from "react"; 
// import {StyleSheet, Text, View, TextInput}from "react-native";
import { Container, Header, Content, Form, Item, Input, Text, Label } from 'native-base';
      

    export default class SignupPage extends Component {
          render() {
            return (
              <Container>
                <Header />
                <Content>
                  <Form>
                      <Text>Sign-Up</Text>
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
