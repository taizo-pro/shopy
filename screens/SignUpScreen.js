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
import auth from '@react-native-firebase/auth';
import {LoginManager, AccessToken} from 'react-native-fbsdk';

export default class SignUpScreen extends React.Component {
  state = {
    email: '',
    password: '',
  };

  facebookSignUp = () => {
    return (
      <Button
        title="Facebook"
        onPress={() =>
          onFacebookButtonPress().then(() => {
            console.log('Signed in with Facebook!');
          })
        }
      />
    );
  };

  onFacebookButtonPress = async () => {
    const result = await LoginManager.logInWithPermissions([
      'public_profile',
      'email',
    ]);

    if (result.isCancelled) {
      throw 'User cancelled the login process';
    }

    // 一度ログインしているユーザー
    const data = await AccessToken.getCurrentAccessToken();

    if (!data) {
      throw 'Something went wrong obtaining access token';
    }

    // Create a Firebase credential with the AccessToken
    const facebookCredential = auth.FacebookAuthProvider.credential(
      data.accessToken,
    );

    // Sign-in the user with the credential
    return auth().signInWithCredential(facebookCredential);
  };

  handleSubmit = async () => {
    try {
      await firebase
        .auth()
        .createUserWithEmailAndPassword(this.state.email, this.state.password);
      console.log('email login success');
      this.props.navigation.navigate('App');
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
          <View style={{flexDirection: 'row', alignSelf: 'center', margin: 30}}>
            <Button
            style={{width: 200}}
              title="Facebook"
              onPress={() =>
                this.onFacebookButtonPress().then(() => {
                  console.log('Signed in with Facebook!');
                })
              }
            />
            <Text>登録済みですか？</Text>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('SignIn');
              }}>
              <Text style={{color: 'deepskyblue'}}>ログイン</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Container>
    );
  }
}
