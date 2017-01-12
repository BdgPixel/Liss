'use strict';
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView,
  NavigatorIOS
} from 'react-native';

import TopArticleList from './TopArticleList';

export default class TopArticle extends Component{
	render(){
		return(
			<NavigatorIOS 
        style={styles.container}
        barTintColor='#c01820'
        titleTextColor='#ffffff'
        initialRoute={{
          title: 'Tech in Asia',
          component: TopArticleList
        }}/>
		);
	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

module.exports = TopArticle;