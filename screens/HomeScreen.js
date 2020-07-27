import React from 'react';
import {SafeAreaView, Text, TouchableOpacity} from 'react-native';
import {Container, Header, Right, Left, Body, Title, Content, List, ListItem} from 'native-base';
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
        <Content>
          <List>
            <ListItem>
              <Text>ホーム</Text>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}
