import React, {useContext} from 'react';

import {createSwitchNavigator, createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
// import 'react-native-gesture-handler';

import TutorialScreen from './screens/TutorialScreen';
import SignInScreen from './screens/SignInScreen';
import HomeScreen from './screens/HomeScreen';
import FavoriteScreen from './screens/FavoriteScreen';
import MypageScreen from './screens/MypageScreen';

import Icon from 'react-native-vector-icons/FontAwesome';
import firebase from 'firebase'
import env from './env.json'

const firebaseConfig = {
  apiKey: env.FIREBASE_API_KEY,
  authDomain: env.FIREBASE_AUTH_DOMAIN,
  databaseURL: env.FIREBASE_DB_URL,
  projectId: env.FIREBASE_PROJECT_ID,
  storageBucket: env.FIREBASE_STORAGE,
  messagingSenderId: env.FIREBASE_SENDER_ID,
  appId: env.FIREBASE_APP_ID,
  measurementId: env.FIREBASE_MEASUREMENT_ID,
};

firebase.initializeApp(firebaseConfig);

const AuthStack = createStackNavigator({
  Tutorial: {
    screen: TutorialScreen,
    navigationOptions: {
      headerShown: false
    }
  },
  SignIn: {
    screen: SignInScreen,
    navigationOptions: {
      headerTitle: 'shopyをはじめよう',
      headerBackTitle: '戻る'
    }
  },
});

const AppTabStack = createBottomTabNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      tabBarLabel: 'ホーム',
      tabBarIcon: ({tintColor}) => {
        return <Icon name="home" color={tintColor} size={25} />;
      },
    },
  },
  Favorite: {
    screen: FavoriteScreen,
    navigationOptions: {
      tabBarLabel: 'お気に入り',
      tabBarIcon: ({tintColor}) => {
        return <Icon name="heart" color={tintColor} size={25} />;
      },
    },
  },
  Mypage: {
    screen: MypageScreen,
    navigationOptions: {
      tabBarLabel: 'マイページ',
      tabBarIcon: ({tintColor}) => {
        return <Icon name="user" color={tintColor} size={25} />;
      },
    },
  },
});

const AppContainer = createAppContainer(
  createSwitchNavigator(
    {
      App: AppTabStack,
      Auth: AuthStack,
    },
    {
      initialRouteName: 'Auth',
    },
  ),
);

export default class App extends React.Component {
  render() {
    return(
      <AppContainer />
    )
  }
}