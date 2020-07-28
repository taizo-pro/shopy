import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Container, Header, Right, Left, Body, Title, Button} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class SignInScreen extends React.Component {
  render() {
    return (
      <Container>
        <Header style={{backgroundColor: 'white', marginHorizontal: 8}}>
          <Left>
            <Button transparent>
              <Icon name='back' />
              <Text>戻る</Text>
            </Button>
          </Left>
          <Body>
            <Title>shopyをはじめましょう</Title>
          </Body>
          <Right />
        </Header>

        <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
          <Button>
            <Text>はじめる</Text>
          </Button>
        </View>
      </Container>
    );
  }
}
