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

  constructor() {
    super();

    this.state = {
      userid:"",
      password:"",
      type:"",
      errors:" "
    }
  }

  async onLoginPress() {
    try {
      let response = await fetch('https://eduace.herokuapp.com/api/login/student', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userid: this.state.userid,
        password: this.state.password,
        type: 'student'
      })
    });

    let res = await response.text();
    console.log(response);

    if (response.status != 200) {
      console.log('Error');
      let errors = res;
      throw errors
    } else {
      console.log('Loggedin');
      var {navigate} = this.props.navigation;
      navigate('Home');
    }

    } catch (errors) {
      this.setState({errors:'Invalid Input'})
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Logo />
        <Form setUsername={(userid) => this.setState({userid})}
              setPassword={(password) => this.setState({password})} />
        <ButtonSubmit navigation={this.props.navigation}
                      onPress={this.onLoginPress.bind(this)}/>
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
