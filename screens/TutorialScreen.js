import React from 'react';
import {SafeAreaView, Text, TouchableOpacity, View, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Button} from 'native-base';

export default class TutorialScreen extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={{alignItems: 'center'}}>
        <Image
          source={require('../assets/AddtoCart-rafiki.png')}
          style={{width: 300, height: 300, marginTop: 100}}
        />
        <Button
          style={{
            backgroundColor: 'limegreen',
            width: 250,
            alignSelf: 'center',
          }}
          onPress={() => {
            this.props.navigation.navigate('SignUp');
          }}>
          <Text
            style={{
              color: 'white',
              textAlign: 'center',
              flex: 1,
              fontSize: 18,
            }}>
            すぐにはじめる
          </Text>
        </Button>
      </View>
    );
  }
}
