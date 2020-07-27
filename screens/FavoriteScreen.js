import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Container, Header, Right, Left, Body, Title} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class FavoriteScreen extends React.Component {
  render() {
    return (
      <Container>
        <Header style={{backgroundColor: 'white'}}>
          <Left />
          <Body>
            <Title>お気に入りリスト</Title>
          </Body>
          <Right>
            <TouchableOpacity>
              <Icon name="shopping-cart" size={24} />
            </TouchableOpacity>
          </Right>
        </Header>
        <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
          <Text>お気に入り</Text>
        </View>
      </Container>
    );
  }
}
