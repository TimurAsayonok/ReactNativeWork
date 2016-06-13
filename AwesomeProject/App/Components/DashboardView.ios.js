'use strict'

import React, {Component} from 'react';
import Crypto from 'crypto-js';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  WebView,
  ListView,
  Image,
  AlertIOS,
  NavigatorIOS
} from 'react-native';

const REQUEST_URL = 'http://gateway.marvel.com:80/v1/public/characters';

class DashboardView extends Component{
  constructor(props){
    super(props)
    this.timestamp = 1;
    this.public_key = '9a6a2e7e2ee1ff735a5d269bed263e7e';
    this.private_key = '6ebe068fe586aeb4c6a9003538560d873bc38dcb';
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2
      }),
      loaded: false
    }
  }

  componentDidMount(){
    this.fetchData();
  }

  fetchData(){
    var hash = Crypto.MD5(this.timestamp + this.private_key + this.public_key);

    fetch(REQUEST_URL + '?ts=' + this.timestamp + '&apikey=' + this.public_key + '&hash=' + hash)
    .then((response) => response.json())
    .then((responseData) => {
      console.log(responseData);
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(responseData.data.results),
        loaded: true
      })
    })
    .done();
  }

  renderLoadingView(){
    return(
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    )
  }

  renderComic(comic){
    return (
      <TouchableHighlight>
        <Image source={{uri: comic.thumbnail.path+'.jpg'}} style={styles.backgroundImage}>
          <View style={styles.rightContainer}>
            <Text style={styles.title}>{comic.name}</Text>
            <Text style={styles.available}>{comic.comics.available}</Text>
          </View>
        </Image>
      </TouchableHighlight>
    )
  }

  render(){
    if(!this.state.loaded){
      return this.renderLoadingView();
    }
    return(
      <ListView
        dataSource = {this.state.dataSource}
        renderRow = {this.renderComic.bind(this)}
        style = {styles.listView}
      />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#f5fcff'
  },
  title: {
    marginTop: 40,
    marginBottom: 8,
    textAlign: 'center',
    color: '#fff',
    backgroundColor: 'rgba(52,52,52,0)'
  },
  backgroundImage: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
    height: 150,
  },
  rightContainer: {
    backgroundColor: 'rgba(52,52,52,0.5)',
    alignSelf: 'stretch',
    paddingTop: 30,
    height: 150,
  },
  available: {
    fontSize: 18,
    textAlign: 'center',
    color: '#fff',
    backgroundColor: 'rgba(52,52,52,0)',
  },
  listView: {
    paddingTop: 64,
    marginBottom: 49,
  }
})

module.exports = DashboardView;
