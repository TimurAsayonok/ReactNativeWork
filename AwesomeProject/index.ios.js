/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import Main from './App/Components/Main';
import Button from 'react-native-button';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  TouchableOpacity,
  TouchableHighlight,
  View,
  WebView,
  AlertIOS,
  NavigatorIOS
} from 'react-native';


class AwesomeProject extends Component {
  _onPressButtonGet(){
    fetch("http://localhost:3000/test?search=nraboy", {method: "GET"})
    .then((response) => response.json())
    .then((responseData) =>{
      AlertIOS.alert("GET Response",
                "Search Query -> " + responseData.search)
    })
    .done();
  }
  _handlePress() {
    console.log('Pressed!');
  }
  render() {
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'Github Notetaker',
          component: Main
        }} />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
  },
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
