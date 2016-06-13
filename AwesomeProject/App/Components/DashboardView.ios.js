'use strict'

import React, {Component} from 'react';
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

class DashboardView extends Component{
  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.title}>DashboardView Component </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  title: {
    marginTop: 100,
    fontSize: 25,
  },
})

module.exports = DashboardView;
