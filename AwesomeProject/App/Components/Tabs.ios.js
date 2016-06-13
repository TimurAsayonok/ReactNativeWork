'use strict'

import React, {Component} from 'react';
import Dashboard from './App/Components/DashboardView';
// import Heroes from './App/Components/HeroesView';
import {
  TabBarIOS,
  Text
} from 'react-native';

class Tabs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedTab: 'dashboard'
    }
  }

  render(){
    return (
      <TabBarIOS style={{backgroundColor: '#fff'}}>
        <TabBarIOS.Item
          title="Dashboard"
          selected={this.state.selectedTab === 'dashboard'}
          onPress={() => {
            this.setState({
              selectedTab: 'dashboard'
            })
          }}>

          <Dashboard navigator={this.props.navigator}/>
        </TabBarIOS.Item>

        <TabBarIOS.Item
          title="Heroes"
          selected={this.state.selectedTab === 'heroes'}
          onPress={() => {
            this.setState({
              selectedTab: 'heroes'
            })
          }}>

          <Heroes />
        </TabBarIOS.Item>
      </TabBarIOS>
    )
  }
}

module.exports = Tabs;
