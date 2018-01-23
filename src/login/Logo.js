import React, { Component, PropTypes } from 'react';
import {
  Hyperlink,
  StyleSheet,
  View,
  Text,
  Image,
} from 'react-native';

import logoImg from './img/logo_placeholder.png';

export default class Logo extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={logoImg} style={styles.image} />
        <Text style={styles.text}>GAO SHI QING</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 100,
    height: 100,
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    backgroundColor: 'transparent',
    marginTop: 20,
    fontSize: 25,
  }
});