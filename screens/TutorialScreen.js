import React from 'react';
import {SafeAreaView, Text, TouchableOpacity, Button} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class TutorialScreen extends React.Component {
  render() {
    return (
      <Button style={{justifyContent: 'center'}}>
        <Text>すぐにはじめる</Text>
      </Button>
    );
  }
}