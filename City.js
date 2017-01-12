'use strict';

import React, { Component } from 'react';
import {
   View,
   ListView,
   Text,
   StyleSheet,
   NavigatorIOS
} from 'react-native';

import CityList from './CityList';

export default class City extends Component {
	render(){
		return(
			<NavigatorIOS
        style={styles.container}
        barTintColor='#c01820'
        titleTextColor='#ffffff'
        initialRoute={{
        title: 'Tech in Asiasss',
        component: CityList  
      }}/>
		);
	}
}

const styles = StyleSheet.create({
	description: {
    fontSize: 20,
    backgroundColor: 'white',
    color: 'black'
  },
  container: {
    flex: 1
  }
});

module.exports = City;