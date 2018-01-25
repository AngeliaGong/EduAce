import {StackNavigator} from "react-navigation";

/**
 * EduAce App
 */
import React, { Component } from 'react';
import {
  StyleSheet,
  View
} from 'react-native';

import Logo from './Logo'
import Form from './Form'
import SignupSection from './SignupSection'
import ButtonSubmit from './ButtonSubmit.js'

export default class Login extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Logo />
        <Form />
        <ButtonSubmit />
        <SignupSection/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#5AC5E5',
  },
});
