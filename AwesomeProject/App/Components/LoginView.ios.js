
import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  Alert,
  View,
  WebView,
  AlertIOS,
  NavigatorIOS,
  Image,
} from 'react-native';

class LoginView extends Component{
  onLogin(){
    Alert.alert(
      'Ok',
      'You are clicking to Login button',
      [
        {
          text: 'Accept',
          onPress: this.accept.bind(this)
        },
        {
          text: 'Cancel',
          onPress: this.cancel.bind(this)
        }
      ]
    );
  }
  accept(){
    this.props.navigator.push({
      title: 'Dashboard',
      name: 'Dashboard',
      passProps:{}
    });
  }
  cancel(){
    console.log('Cansel');
  }
  render(){
    return(
      <Image style={styles.container} source={{uri: 'https://images.unsplash.com/photo-1453781382334-20f5dfb0fb2e?format=auto&auto=compress&dpr=1&crop=entropy&fit=crop&w=1920&h=2880&q=80'}}>
        <View>
          <Text style={styles.title}>Login page</Text>
          <TouchableHighlight style={styles.button} onPress={(this.onLogin.bind(this))}>
            <Text style={styles.text}>Login</Text>
          </TouchableHighlight>

        </View>
      </Image>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    padding: 30
  },
  button: {
    width: 250,
    height: 30,
    backgroundColor: '#5f9ea0',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 60,
    marginBottom: 10,
    borderRadius: 8,
  },
  text: {
    color: '#fff',
  },
  title: {
    backgroundColor: 'rgba(0,0,0,0)',
    textAlign: 'center',
    color: '#fff',
    fontSize: 20,
    marginTop: 100,
  }
})
module.exports = LoginView;
