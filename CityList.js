'use strict';

import React, { Component } from 'react';
import {
   View,
   ListView,
   Text,
   StyleSheet
} from 'react-native';

export default class CityList extends Component {
	constructor(props) {
    super(props);
  }
	render(){
		return(
			<View style={styles.container}>
				<Text style={styles.text}>Testing</Text>
			</View>
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
    flex: 1,
    backgroundColor: 'blue',
  },
  text: {
  	color: 'red',
  	marginTop: 100
  }
});

module.exports = CityList;