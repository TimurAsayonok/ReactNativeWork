/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import Button from 'react-native-button';
import OpenGraphParser from 'react-native-opengraph-kit/OpenGraphParser';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
  WebView,
  ListView
} from 'react-native';


class AwesomeProject extends Component {
  constructor(props){
    super(props);

    this.state ={
      text: 'Your url',
      loaded: false,
      inputUrl: '',
      openGraphData: {},
    }
  }
  onPressButton(){

  }
  fetchUrl(){
    // var urlYoutube = "http://www.youtube.com/oembed?url=http%3A//youtube.com/watch%3Fv%3DM3r2XDceM6A&format=json";
    // var url = 'https://www.npmjs.com/package/open-graph';
    // var url2 = "https://www.youtube.com/watch?v=eywqO47Eq6s"

    OpenGraphParser.extractMeta(this.state.inputUrl).then(
        (data) => {
            console.log(data);
            if (data) {
                this.setState({
                    openGraphData: data,
                    loaded: true
                });
            }
        }
    );
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Test work</Text>
        <TextInput style={styles.textInput}
          placeholder = {this.state.text}
          onChange = {(event) => this.setState({inputUrl: event.nativeEvent.text})}
        />
        <TouchableHighlight onPress={this.fetchUrl.bind(this)} style={styles.button}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
    alignItems: 'center'
  },
  textInput: {
    height: 30,
    borderColor: 'gray',
    borderWidth: 1,
    alignSelf: 'stretch',
    borderRadius: 8,
    paddingLeft: 5,
    marginTop: 10,
    marginLeft: 15,
    marginRight: 15
  },
  title:{
    textAlign: 'center',
    fontSize: 20
  },
  button: {
    marginTop: 10,
    backgroundColor: '#8fbc8f',
    padding: 5,
    borderRadius: 4,
  },
  buttonText:{
    color: '#fff'
  }
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
