'use strict';
import React, { Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView,
  Image,
  ScrollView,
  TouchableHighlight,
  NavigatorIOS 
} from 'react-native';

import TopArticleList from './TopArticleList';
import PageChina from './PageChina';
import PageHongkong from './PageHongkong';
import PageIndonesia from './PageIndonesia';
import PageJapan from './PageJapan';
import PageKorea from './PageKorea';
import PageMalaysia from './PageMalaysia';
import PagePakistan from './PagePakistan';
import PagePhilippiness from './PagePhilippiness';
import PageSingapore from './PageSingapore';
import PageTaiwan from './PageTaiwan';
import PageThailand from './PageThailand';
import PageVietnam from './PageVietnam';

export default class CountryList extends Component{
	constructor(props) {
    super(props);
    
    // this.pageChina = this.pageChina.bind(this);
    // this.pageHongkong = this.pageHongkong.bind(this);
    // this.pageIndonesia = this.pageIndonesia.bind(this);
  }

  pageChina = () =>  {
    this.props.navigator.push({
      title: "China",
      component: PageChina
    });
  }

  pageHongkong = () => {
    this.props.navigator.push({
      title: "Hongkong",
      component: PageHongkong
    });
  }

  pageIndonesia = () => {
    this.props.navigator.push({
      title: "Indonesia",
      component: PageIndonesia
    });
  }

  pageJapan = () => {
    this.props.navigator.push({
      title: "Japan",
      component: PageJapan
    });
  }

  pageKorea = () => {
    this.props.navigator.push({
      title: "Korea",
      component: PageKorea
    });
  }

  pageMalaysia = () => {
    this.props.navigator.push({
      title: "Malaysia",
      component: PageMalaysia
    });
  }

  pagePakistan = () => {
    this.props.navigator.push({
      title: "Pakistan",
      component: PagePakistan
    });
  }

  pagePhilippiness = () => {
    this.props.navigator.push({
      title: "Philippines",
      component: PagePhilippiness
    });
  }

  pageSingapore = () => {
    this.props.navigator.push({
      title: "Singapore",
      component: PageSingapore
    });
  }

  pageTaiwan = () => {
    this.props.navigator.push({
      title: "Taiwan",
      component: PageTaiwan
    });
  }

  pageThailand = () => {
    this.props.navigator.push({
      title: "Thailand",
      component: PageThailand
    });
  }

  pageVietnam = () => {
    this.props.navigator.push({
      title: "Vietnam",
      component: PageVietnam
    });
  }

	render(){
		return(
			<ScrollView style={styles.container}>
        {/* wrap */}
        <TouchableHighlight onPress={this.pageChina} style={styles.button}>
          <Image
            style={styles.imageLink} 
            source={require('./images/country/small/china.png')}
          />
        </TouchableHighlight>

        <TouchableHighlight onPress={this.pageHongkong} style={styles.button}>
          <Image 
            style={styles.imageLink}
            source={require('./images/country/small/hongkong.png')}
          />
        </TouchableHighlight>  

        <TouchableHighlight onPress={this.pageIndonesia} style={styles.button}>
          <Image 
            style={styles.imageLink}
            source={require('./images/country/small/indonesia.png')}
          />
        </TouchableHighlight>
        

        <TouchableHighlight onPress={this.pageJapan} style={styles.button}>
          <Image 
            style={styles.imageLink}
            source={require('./images/country/small/japan.png')}
          />
        </TouchableHighlight>

        <TouchableHighlight onPress={this.pageKorea} style={styles.button}>
          <Image 
            style={styles.imageLink}
            source={require('./images/country/small/korea.png')}
          />
        </TouchableHighlight>

        <TouchableHighlight onPress={this.pageMalaysia} style={styles.button}>
          <Image 
            style={styles.imageLink}
            source={require('./images/country/small/malaysia.png')}
          />
        </TouchableHighlight>

        <TouchableHighlight onPress={this.pagePakistan} style={styles.button}>
          <Image 
            style={styles.imageLink}
            source={require('./images/country/small/pakistan.png')}
          />
        </TouchableHighlight>

        <TouchableHighlight onPress={this.pagePhilippiness} style={styles.button}>
          <Image 
            style={styles.imageLink}
            source={require('./images/country/small/philippines.png')}
          />
        </TouchableHighlight>

        <TouchableHighlight onPress={this.pageSingapore} style={styles.button}>
          <Image 
            style={styles.imageLink}
            source={require('./images/country/small/singapore.png')}
          />
        </TouchableHighlight>

        <TouchableHighlight onPress={this.pageTaiwan} style={styles.button}>
          <Image 
            style={styles.imageLink}
            source={require('./images/country/small/TAIWAN.png')}
          />
        </TouchableHighlight>

        <TouchableHighlight onPress={this.pageThailand} style={styles.button}>
          <Image 
            style={styles.imageLink}
            source={require('./images/country/small/THAILAND.png')}
          />
        </TouchableHighlight>

        <TouchableHighlight onPress={this.pageVietnam} style={styles.button}>
          <Image 
            style={styles.imageLink}
            source={require('./images/country/small/vietnam.png')}
          />
        </TouchableHighlight>

			</ScrollView>
		);
	}

}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	thumbnail: {
    width: 90,
    height: 90,
    marginRight: 15
  },
  country: {
  	color: 'red'
  },
  wrapContent: {
    flex: 1
  },
  image: {
    flex: 1,
    height: 150,
    width: null,
    top: 0,
    left: 0, 
    right: 0,
  },
  wrapCountry: {
    position: 'absolute',
    left:     0,
    top:      0,
    height: 150,
    width: null,
    backgroundColor:'red',
    opacity:0.8,
  },
  country: {
    color: 'white',
    flexDirection: 'row',
  },

  wrapper: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  wrapper2: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginTop: 150
  },
  wrapper3: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginTop: 150,
    marginBottom: 150
  },
  wrapImg: {
    position: 'absolute',
    top: 0,
    left: 0, 
    right: 0,
    height: 150
  },
  topContainer: {
    position: 'absolute',
    top: 0,
    left: 0, 
    right: 0,
    height: 150,
    backgroundColor: '#33373d',
    shadowRadius: 10,
    opacity: 0.4,
    shadowOpacity: 0.5,
    shadowOffset: {
      h: 0,
      w: 0
    },
  },
  bottomContainer: {
    position: 'absolute',
    backgroundColor: 'transparent',
    width: null,
    height: 150,
    marginTop: 65,
    top: 0,
    left: 0,
    right: 0
  },
  textCenter: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
    letterSpacing: 1,
    borderBottomColor: 'red',
    borderBottomWidth: 30 
  },
  imageLink: {
    width: null,
    height: 150
  }
});

module.exports = CountryList;