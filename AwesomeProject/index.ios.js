/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import Main from './App/Components/Main';
import Login from './App/Components/LoginView';
import Dashboard from './App/Components/DashboardView';
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
  NavigatorIOS
} from 'react-native';


class AwesomeProject extends Component {
  render() {
    return (
        <Login></Login>
    );
  }
}

const styles = StyleSheet.create({
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
