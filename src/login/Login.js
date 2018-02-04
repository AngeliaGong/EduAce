import {StackNavigator} from "react-navigation";

/**
 * EduAce App
 */
import React, { Component } from 'react';
import {
  Dimensions,
  StyleSheet,
  View
} from 'react-native';

import Logo from './Logo'
import Form from './Form'
import SignupSection from './SignupSection'
import ButtonSubmit from './ButtonSubmit.js'

const deviceH = Dimensions.get('window').height
const deviceW = Dimensions.get('window').width

export default class Login extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Logo />
        <Form />
        <ButtonSubmit navigation={this.props.navigation}/>
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
    position:'absolute',
    height: deviceH
  },
});
