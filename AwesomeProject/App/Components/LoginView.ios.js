
import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  TouchableOpacity,
  TouchableHighlight,
  Alert,
  View,
  WebView,
  AlertIOS,
  NavigatorIOS
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
    Alert.alert('accept');
  }
  cancel(){
    console.log('Cansel');
  }
  render(){
    return(
      <View style={styles.container}>
        <Text>Login page</Text>
        <TouchableHighlight style={styles.button} onPress={(this.onLogin.bind(this))}>
          <Text style={styles.text}>Login</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    width: 300,
    height: 30,
    backgroundColor: '#5f9ea0',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 8,
  },
  text: {
    color: '#fff',
  }
})
module.exports = LoginView;
