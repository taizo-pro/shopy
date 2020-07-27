import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Container, Header, Right, Left, Body, Title, Content, List, ListItem} from 'native-base';
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
        <Content>
          <List>
            <ListItem itemDivider>
              <Text>基本情報</Text>
            </ListItem>
            <ListItem style={{justifyContent: 'space-between'}}>
              <Text>メールアドレス変更</Text>
              <Icon name='chevron-right' color={'lightgrey'} size={16} />
            </ListItem>
            <ListItem style={{justifyContent: 'space-between'}}>
              <Text>パスワード変更</Text>
              <Icon name='chevron-right' color={'lightgrey'} size={16} />
            </ListItem>
            <ListItem style={{justifyContent: 'space-between'}}>
              <Text>お気に入り一覧</Text>
              <Icon name='chevron-right' color={'lightgrey'} size={16} />
            </ListItem>
            <ListItem itemDivider>
              <Text>メニュー</Text>
            </ListItem>
            <ListItem style={{justifyContent: 'space-between'}}>
              <Text>お問い合わせ</Text>
              <Icon name='chevron-right' color={'lightgrey'} size={16} />
            </ListItem>
            <ListItem style={{justifyContent: 'space-between'}}>
              <Text>利用規約</Text>
              <Icon name='chevron-right' color={'lightgrey'} size={16} />
            </ListItem>
            <ListItem style={{justifyContent: 'space-between'}}>
              <Text>プライバシーポリシー</Text>
              <Icon name='chevron-right' color={'lightgrey'} size={16} />
            </ListItem>
            <ListItem style={{justifyContent: 'space-between'}}>
              <Text>ログアウト</Text>
              <Icon name='chevron-right' color={'lightgrey'} size={16} />
            </ListItem>
            <ListItem itemDivider>
            </ListItem>
            <ListItem style={{justifyContent: 'space-between'}}>
              <Text>アカウントを削除</Text>
              <Icon name='chevron-right' color={'lightgrey'} size={16} />
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}