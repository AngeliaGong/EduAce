import React, { AppRegistry } from 'react';
import { StackNavigator } from 'react-navigation';
import Home from '../home/Home';
import Login from './Login';

const Navigation = StackNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      headerTitle: 'Login'
    }
  },
  Home: {
    screen: Home,
    navigationOptions: {
      headerTitle: 'Home'
    }
  },
})

export default Navigation;