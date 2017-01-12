/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
'use strict';
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView,
  TabBarIOS,
  TabBarItem,
  TouchableHighlight,
  ScrollView,
  StatusBar
} from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button} from 'native-base';


import Featured from './Featured';
import Search from './Search';
import TopArticle from './TopArticle';
import Country from './Country';
import MyPresentationalComponent from './MyPresentationalComponent';
import Icon from 'react-native-vector-icons/Ionicons';

export default class Liss extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      selectedTab: 'featured'
    };
  }

  render(){
    return(
        <TabBarIOS 
          selectedTab={this.state.selectedTab}
          tintColor="#ffffff"
          barTintColor="#27292d"
          >
          <Icon.TabBarItem
            selected={this.state.selectedTab === 'featured'}
            title="Home"
            iconSize={25}
            iconName="ios-home-outline"
            selectedIconName="ios-home"
            onPress={() => {
              this.setState({
                selectedTab: 'featured'
              });
            }}>
            <Featured/>
          </Icon.TabBarItem>

          <Icon.TabBarItem
            selected={this.state.selectedTab === 'toparticle'}
            title="Top Article"
            iconSize={36}
            iconName="ios-list-outline"
            selectedIconName="ios-list"
            onPress={() => {
              this.setState({
                selectedTab: 'toparticle'
              });
            }}>
            <TopArticle/>
          </Icon.TabBarItem>

          <Icon.TabBarItem
          selected={this.state.selectedTab === 'search'}
            title="Conference"
            iconSize={32}
            iconName="ios-people-outline"
            selectedIconName="ios-people"
            onPress={() => {
              this.setState({
                selectedTab: 'search'
              });
            }}>
            <Search/>
          </Icon.TabBarItem>

          <Icon.TabBarItem
          selected={this.state.selectedTab === 'city'}
            title="Country"
            iconSize={24}
            iconName="ios-globe-outline"
            selectedIconName="ios-globe"
            onPress={() => {
              this.setState({
                selectedTab: 'city'
              });
            }}>
            <Country/>
          </Icon.TabBarItem>
        </TabBarIOS>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20
  },
  separator: {
    height: 1,
    backgroundColor: '#dddddd'
  }
});

AppRegistry.registerComponent('Liss', () => Liss);
