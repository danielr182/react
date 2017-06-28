import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, KeyboardAvoidingView } from 'react-native';
import LoginForm from './loginForm';

class Login extends Component {
    render() {
        return (
          <View style={styles.container}>
            <View style={styles.logoContainer}>
              <Image style={styles.logo} source={require('../../images/freepik.png')} />
              <Text style={styles.title}>An app made for something great.</Text>
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
      backgroundColor: '#3498db'
    },
    logoContainer: {
      alignItems: 'center',
      flexGrow: 1,
      justifyContent: 'center'
    },
    logo: {
      width: 100,
      height: 100
    },
    title: {
      color: '#FFF',
      marginTop: 1,
      width: 120,
      textAlign: 'center',
      opacity: 0.9
    }
});

export default Login;