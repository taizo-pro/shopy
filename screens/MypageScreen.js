import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

export default class MypageScreen extends React.Component {
  render() {
    return (
      <SafeAreaView style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
        <Text>マイページ</Text>
      </SafeAreaView>
    )
  }
}
