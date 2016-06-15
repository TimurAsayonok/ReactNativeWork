
import React, { Component } from 'react';
import Button from 'react-native-button';
import OpenGraphParser from 'react-native-opengraph-kit/OpenGraphParser';
import OpenUrl from './App/Component/OpenUrl';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
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
      siteName: '',
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
                    siteName: data.site_name,
                });
                console.log(this.state.description);
            }
        }
    );
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
          <Image source={{uri: this.state.image}} style={styles.image}>
            <Text style={styles.imageTitle}>
              {this.state.title}
            </Text>
          </Image>
          <Text style={styles.titleUrl}>{this.state.title}</Text>
          <OpenUrl url={this.state.url} textUrl={this.state.url}/>
          <Text style={styles.description}>
            {this.state.description}
          </Text>
          <OpenUrl url={this.state.url} textUrl={'Read More'} />
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
