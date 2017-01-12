'use strict';
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView,
  NavigatorIOS,
  Navigator,
  Button
} from 'react-native';

import Header from './Header';

export default class WrapHeader extends Component{
	renderScene (route, navigator) {
  	return <route.component navigator={navigator} />
  }
	render(){
		return(
			<Navigator
				tintColor="#ffffff"
				barTintColor='#c01820'
        titleTextColor='#ffffff'
        style={styles.container}
        renderScene={this.renderScene.bind(this)}
        initialRoute={{component: Header}}  
      />
		);
	}
}

class SignIn extends Component {
  _navigate () {
    this.props.navigator.push({
        component: Header
    })  
  }
  render () {
    return (
      <View style={styles.container}>
        <Text>Hello from SignIn</Text>
        <Button 
        	onPress={this._navigate.bind(this)}
        	title="Learn More"
  				color="#841584"
  				accessibilityLabel="Learn more about this purple button" 
  			/>
      </View>
    )
  }
}

class Payments extends Component {
    render () {
    return (
      <Text>Hello from Payments</Text>
    )
  }      
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		height: 180,
		backgroundColor: 'red'
	}
});

module.exports = WrapHeader;