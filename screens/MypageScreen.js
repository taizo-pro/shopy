import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Container, Header, Right, Left, Body, Title} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class MypageScreen extends React.Component {
  render() {
    return (
      <Container>
        <Header style={{backgroundColor: 'white',  marginHorizontal: 8}}>
          <Left style={{flex: 1}} />
          <Body style={{flex: 1}}>
            <Title>マイページ</Title>
          </Body>
          <Right style={{flex: 1}}>
            <TouchableOpacity>
              <Icon name="shopping-cart" size={24} />
            </TouchableOpacity>
          </Right>
        </Header>
        <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
          <Text>マイページ</Text>
        </View>
      </Container>
    );
  }
}