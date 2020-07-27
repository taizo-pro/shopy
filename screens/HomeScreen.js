import React from 'react';
import {SafeAreaView, Text, TouchableOpacity} from 'react-native';
import {Container, Header, Right, Left, Body, Title} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class HomeScreen extends React.Component {
  render() {
    return (
      <Container>
        <Header style={{backgroundColor: 'white', marginHorizontal: 8}}>
          <Left />
          <Body>
            <Title>ホーム</Title>
          </Body>
          <Right>
            <TouchableOpacity>
              <Icon name="shopping-cart" size={24} />
            </TouchableOpacity>
          </Right>
        </Header>
        <TouchableOpacity
          style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
          <Text>ホーム画面</Text>
        </TouchableOpacity>
      </Container>
    );
  }
}
