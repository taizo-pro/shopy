import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

export default class FavoriteScreen extends React.Component {
  render() {
    return (
      <SafeAreaView style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
        <Text>お気に入り</Text>
      </SafeAreaView>
    )
  }
}
