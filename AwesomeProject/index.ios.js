/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import Main from './App/Components/Main';
import Login from './App/Components/LoginView';
import Tabs from './App/Components/Tabs';
import Button from 'react-native-button';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
  Navigator
} from 'react-native';

var NavigatorBarRouteMapper = {
  LeftButton: function(route, navigator, index){
    if(route.name == 'Login'){
      return null;
    }
    return(
      <TouchableHighlight onPress={() => {
        if(index > 0){
          navigator.pop();
        }
      }}>
        <Text style={{marginTop: 10, marginLeft: 20, color:'#007AFF'}}>Back</Text>
      </TouchableHighlight>
    )
  },
  RightButton: function(route, navigator, index){
    return null;
  },
  Title: function(route, navigator, index){
    if(route.name == 'Login'){
      return null;
    }
    return (
      <Text style={{marginTop: 10, color: '#007AFF'}}>
        {route.name}
      </Text>
    )
  }
}

class AwesomeProject extends Component {
  renderScene(route, navigator){
    switch (route.name) {
      case 'Login':
        return (<Login navigator={navigator} route={route} />);
      case 'Dashboard':
        return (<Tabs navigator={navigator} route={route} />);
    }
  }
  render() {
    return (
      <Navigator style={{backgroundColor: '#fff'}}
        initialRoute = {{name: 'Login'}}
        renderScene = {this.renderScene}
        configureScene = {(route) => {
          if(route.sceneConfig){
            return route.sceneConfig;
          }
          return Navigator.SceneConfigs.FloatFromRight
        }}
        navigationBar = {
          <Navigator.NavigationBar
            routeMapper = {NavigatorBarRouteMapper} />
        }
      />
    )
  }
}

const styles = StyleSheet.create({
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
