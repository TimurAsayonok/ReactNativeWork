
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
  Linking,
  Image,
} from 'react-native';

class AwesomeProject extends Component {
  constructor(props){
    super(props);

    this.state ={
      loaded: false,
      loadedText: 'Preview is here',
      inputUrl: '',
      openGraphData: {},
      description: '',
      url: '',
      image: '',
      title: '',
      siteName: ''
    }
  }
  fetchUrl(){
    this.setState({
      loaded: false,
      loadedText: 'Loading...'
    });
    OpenGraphParser.extractMeta(this.state.inputUrl).then(
        (data) => {
          console.log(data);
            if (data) {
                this.setState({
                    openGraphData: data,
                    loaded: true,
                    url: data.url,
                    image: data.image,
                    title: data.title,
                    description: data.description,
                    siteName: data.site_name
                });
                console.log(this.state.description);
            }
        }
    );
  }
  openLink(url){
    console.log(url);
    Linking.canOpenURL(url)
      .then(supported => {
        if(supported){
          Linking.openURL(url);
        }else{
          console.log('Dont know how to open URI')
        }
      });
  }
  renderLoadView(){
    return(
      <View style={styles.container}>
        <Text style={styles.loadText}>{this.state.loadedText}</Text>
      </View>
    )
  }
  renderInformationView(){
      if(!this.state.loaded){
        return this.renderLoadView();
      }
      return(
        <View style={styles.preview}>
        <TouchableHighlight
          onPress={this.openLink.bind(this,this.state.url)}>
        </TouchableHighlight>
          <Image source={{uri: this.state.image}} style={styles.image}>
            <Text style={styles.imageTitle}>
              {this.state.title}
            </Text>
          </Image>
          <Text style={styles.titleUrl}>{this.state.title}</Text>
          <Text style={styles.url}>{this.state.url}</Text>
          <Text style={styles.description}>{this.state.description} <Text style={styles.readMore}>Read More</Text></Text>
        </View>
      )
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Test work</Text>
        <TextInput style={styles.textInput}
          placeholder = {'Your url'}
          onChange = {(event) => this.setState({inputUrl: event.nativeEvent.text})}
        />
        <Button onPress = {this.fetchUrl.bind(this)} style={styles.button}>Submit</Button>
        {this.renderInformationView()}
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
    color: '#fff',
    fontSize:12
  },
  buttonText:{
    color: '#fff'
  },
  image: {
    height: 200,
    alignSelf: 'stretch',
    marginTop: 20,
    paddingRight: 15,
    paddingLeft: 5,
  },
  imageTitle: {
    paddingLeft: 10,
    paddingBottom: 5,
    paddingTop: 5,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    borderRadius: 5,
    marginTop: 150,
    color: '#F7F7F7',
    alignSelf: 'auto',
  },
  titleUrl: {
    marginLeft: 5,
    fontSize: 15,
    fontWeight: 'bold'
  },
  url: {
    marginLeft: 5,
    fontSize: 8,
    color: '#1e90ff',
    textDecorationLine: 'underline'
  },
  description: {
    marginLeft: 5,
    fontSize: 11,
    marginTop: 5
  },
  readMore: {
    color: '#1e90ff',
    textDecorationLine: 'underline'
  }
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
