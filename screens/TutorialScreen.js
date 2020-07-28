import React from 'react';
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Button} from 'native-base';

export default class TutorialScreen extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <View style={{alignItems: 'center', flex: 1}}>
        <Button
          style={{alignSelf: 'center', justifyContent: 'center', width: 200, height: 200}}
          onPress={() => {this.props.navigation.navigate('SignIn')}}
        >
          <Text>すぐにはじめる</Text>
        </Button>
      </View>
    );
  }
}
