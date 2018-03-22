import React, { Component } from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import LoginForm from './LoginForm';

export default class Login extends Component {
  render(){
    return(
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require('../../images/passion-logo.png')} />

          <Text style={styles.title}>Get enspired by the stories of successful people</Text>
        </View>
        <View style={styles.formContainer}>
          <LoginForm />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#181a20'
  },
  logoContainer: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center'
  },
  logo: {
    width: 300,
    height: 45
  },
  title: {
    color: '#FFF',
    marginTop: 10,
    fontSize: 22,
    width: 300,
    textAlign: 'center',
    opacity: 0.9
  }
});
