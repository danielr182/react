//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, StatusBar } from 'react-native';

// create a component
class LoginForm extends Component {
    render() {
      return (
          <View style={styles.container}>
            <StatusBar barStyle="light-content"/>
            <TextInput 
              style={styles.input}
              placeholder="username"
              returnKeyType="next"
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
              onSubmitEditing={() => this.passwordInput.focus()}
            />
            <TextInput 
              style={styles.input}
              placeholder="password"
              returnKeyType="go"
              ref={(input) => this.passwordInput = input}
              secureTextEntry
            />
            <TouchableOpacity style={styles.buttonContainer}>
              <Text style={styles.buttonText}>LOGIN</Text>
            </TouchableOpacity>
          </View>
      );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
      padding: 20
    },
    input: {
      height: 40,
      backgroundColor: 'rgba(255,255,255,0.7)',
      marginBottom: 20,
      paddingHorizontal: 10
    },
    buttonContainer: {
      backgroundColor: '#2980b9',
      paddingVertical: 15
    },
    buttonText: {
      textAlign: 'center',
      color: '#FFFFFF',
      fontWeight: '700'
    }
});

//make this component available to the app
export default LoginForm;
