import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  TouchableHighlight,
  Linking
} from 'react-native';

class OpenUrl extends Component {
  constructor(props) {
    super(props);
  }
  openLink(){
    console.log(this.props.url);
    Linking.canOpenURL(this.props.url)
      .then(supported => {
        if(supported){
          Linking.openURL(this.props.url);
        }else{
          console.log('Dont know how to open URI')
        }
      });
  }

  render(){
    return(
      <TouchableHighlight
        onPress={this.openLink.bind(this)}>
        <Text style={styles.textUrl}>{this.props.textUrl}</Text>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  textUrl: {
    marginLeft: 5,
    fontSize: 8,
    color: '#1e90ff',
    textDecorationLine: 'underline'
  }
})
module.exports = OpenUrl;
