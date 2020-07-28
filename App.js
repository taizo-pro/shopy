import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import 'react-native-gesture-handler';

import TutorialScreen from './screens/TutorialScreen'
import SignInScreen from './screens/SignInScreen'
import HomeScreen from './screens/HomeScreen';
import FavoriteScreen from './screens/FavoriteScreen';
import MypageScreen from './screens/MypageScreen';

import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicon from 'react-native-vector-icons/Ionicons';

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Tutorial' component={TutorialScreen} />
      <Stack.Screen name='SignIn' component={SignInScreen} />
    </Stack.Navigator>
  )
}

const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({color, size}) => {
          if (route.name === 'ホーム') {
            return <Icon name='home' color={color} size={size} />
          } else if (route.name === 'お気に入り') {
            return <Icon name='heart' color={color} size={size} />
          } else if (route.name === 'マイページ') {
            return <Icon name='user' color={color} size={size} />
          }
        }
      })}
    >
      <Tab.Screen name="ホーム" component={HomeScreen} />
      <Tab.Screen name="お気に入り" component={FavoriteScreen} />
      <Tab.Screen name="マイページ" component={MypageScreen} />
    </Tab.Navigator>
  );
};

export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <StackNavigation />
        {/* <TabNavigation /> */}
      </NavigationContainer>
    );
  }
}
