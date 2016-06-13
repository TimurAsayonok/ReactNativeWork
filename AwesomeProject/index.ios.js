/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import Button from 'react-native-button';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
  WebView,
} from 'react-native';


class AwesomeProject extends Component {

  render() {
    return (
      <Text>Test work</Text>
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
