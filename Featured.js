'use strict';

import React, { Component } from 'react';
import BookList from './BookList';
import {
   View,
   ListView,
   Text,
   StyleSheet,
   NavigatorIOS,
   ScrollView,
   Image,
   StatusBar
} from 'react-native';

import { Container, Header, Title, Content, Footer, FooterTab, Button, Icon } from 'native-base';

export default class Featured extends Component{
	render(){
		return(
      <View style={styles.container}>
        <StatusBar
         backgroundColor="blue"
         barStyle="light-content"
       />
        <NavigatorIOS 
          style={styles.container}
          barTintColor='#c01820'
          titleTextColor='#ffffff'
          tintColor='#ffffff'
          initialRoute={{
            title: 'Tech in Asia',
            component: BookList,
            statusBarHidden: true
        }}/>
      </View>  
		);
	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

module.exports = Featured;