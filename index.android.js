
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Button,
  View
} from 'react-native';
import {
  StackNavigator,
} from 'react-navigation';

import Login from './src/components/login/login';
import * as firebase from 'firebase';

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyC95Ur7qq5cQIVj0MR8GRgmmTh_3y8YfBM",
  authDomain: "proyecto1-ac0bc.firebaseapp.com",
  databaseURL: "https://proyecto1-ac0bc.firebaseio.com",
  storageBucket: "proyecto1-ac0bc.appspot.com"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);



class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      /*<View style={styles.container}>
        <Button
          onPress={() => navigate('Chat', { user: 'Nata' })}
          title="Chat with la nena"
        />
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>        
      </View>*/
      <Login />
    );
  }
}

class ChatScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: `Chat with ${navigation.state.params.user}`
  });
  render() {
    const { params } = this.props.navigation.state;
    return (
      <View>
        <Text>Chat with la {params.user}</Text>
      </View>
    );
  }
}

const InitProject = StackNavigator({
  Home: { screen: HomeScreen },
  Chat: { screen: ChatScreen }
});

const styles = StyleSheet.create({
  container: {

  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  login: {
   
  }
});

AppRegistry.registerComponent('InitProject', () => InitProject);
