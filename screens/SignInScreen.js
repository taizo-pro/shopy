import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Container, Header, Right, Left, Body, Title, Button, Content, Form, Item, Label, Input} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class SignInScreen extends React.Component {
  render() { 
    return (
      <Container>
        <Content>
          <Form>
            <Item floatingLabel>
              <Label>メールアドレス</Label>
              <Input />
            </Item>
            <Item floatingLabel last>
              <Label>パスワード</Label>
              <Input />
            </Item>
          </Form>
        </Content>
        <View style={{flex: 1}}>
          <Button
            onPress={() => this.props.navigation.navigate('App')}
            style={{backgroundColor: 'limegreen', width: 250, alignSelf: 'center'}}
          >
            <Text style={{color: 'white', textAlign: 'center', flex: 1, fontSize: 18}}>はじめる</Text>
          </Button>
        </View>
      </Container>
    );
  }
}
