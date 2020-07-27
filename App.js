import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import 'react-native-gesture-handler';

import HomeScreen from './screens/HomeScreen';
import FavoriteScreen from './screens/FavoriteScreen';
import MypageScreen from './screens/MypageScreen';

import Icon from 'react-native-vector-icons'

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator>
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
        <TabNavigation />
      </NavigationContainer>
    );
  }
}
