import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {
  Container,
  Header,
  Right,
  Left,
  Body,
  Title,
  Button,
  Content,
  Form,
  Item,
  Label,
  Input,
} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';

import firebase from 'firebase';

export default class SignUpScreen extends React.Component {
  state = {
    email: '',
    password: '',
  };

  handleSubmit = async () => {
    try {
      await firebase
        .auth()
        .createUserWithEmailAndPassword(this.state.email, this.state.password);
      console.log('email login success');
      this.props.navigation.navigate('App')
    } catch {
      console.log('error');
    }
  };

  render() {
    return (
      <Container>
        <Content>
          <Form>
            <Item floatingLabel>
              <Label>メールアドレス</Label>
              <Input
                value={this.state.email}
                onChangeText={(input) => {
                  this.setState({email: input});
                }}
              />
            </Item>
            <Item floatingLabel last>
              <Label>パスワード</Label>
              <Input
                value={this.state.password}
                onChangeText={(input) => {
                  this.setState({password: input});
                }}
                secureTextEntry
              />
            </Item>
          </Form>
        </Content>
        <View style={{flex: 1}}>
          <Button
            onPress={this.handleSubmit.bind(this)}
            style={{
              backgroundColor: 'limegreen',
              width: 250,
              alignSelf: 'center',
            }}>
            <Text
              style={{
                color: 'white',
                textAlign: 'center',
                flex: 1,
                fontSize: 18,
              }}>
              はじめる
            </Text>
          </Button>
        </View>
      </Container>
    );
  }
}
