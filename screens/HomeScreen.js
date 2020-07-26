import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
} from 'react-native';

export default class HomeScreen extends React.Component {
  render() {
    return (
      <SafeAreaView
        style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
        <TouchableOpacity>
          <Text>ホーム画面</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}
