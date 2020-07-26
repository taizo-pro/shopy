import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <SafeAreaView style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
        <Text>ホーム画面</Text>
      </SafeAreaView>
    )
  }
}
