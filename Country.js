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

import CountryList from './CountryList';

export default class Country extends Component{
	render(){
		return(
			<NavigatorIOS
				style={styles.container}
				barTintColor='#c01820'
       	titleTextColor='#ffffff'
       	tintColor='#ffffff'
				initialRoute={{
					title: 'Tech in Asia',
					component: CountryList
				}}
			/>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	}
});

module.exports = Country;