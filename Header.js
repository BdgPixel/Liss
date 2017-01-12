'use strict';

import React, { Component } from 'react';
import {
  View, 
  Text, 
  StyleSheet, 
  ScrollView,
  Image,
  TouchableHighlight,
  NavigatorIOS 
} from 'react-native';

import WrapHeader from './WrapHeader';
import TopStories from './category/TopStories';
import Community from './category/Community';
import Startup from './category/Startup';
import Engineer from './category/Engineer';
import Design from './category/Design';
import Mobiles from './category/Mobiles';
import Ecommerce from './category/Ecommerce';
import AllCategories from './category/AllCategories';
import AnimatedEx from './animated/AnimatedEx';

const styles = StyleSheet.create({
  container: {
    flex: 0,
    padding: 8,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fafafa',
    height: 250,
    marginBottom: -60
  },
  input: {
    height: 30,
    flex: 1,
    paddingHorizontal: 8,
    fontSize: 15,
    backgroundColor: '#FFFFFF',
    borderRadius: 2,
  },
  wrapper: {
  	flex: 1,
  	flexDirection: 'row',
  	marginTop: 7,
  	marginBottom: 7
  },
  cat: {
  	backgroundColor: '#FFFFFF',
  	padding: 9,
  	borderRadius: 4,
  	marginLeft: 6,
  	width: 100,
  	height: 90,
  	alignItems: 'center',
  	borderColor: '#fafafa',
  	borderWidth: 1,
    borderBottomColor: '#f7f7f7',
    borderBottomWidth: 2,
    shadowColor: "#e0e0e0",
    shadowOpacity: 0.7,
    shadowRadius: 3,
    shadowOffset: {
      height: 1,
      width: 0
    }
  },
  image: {
  	width: 35,
  	height: 35,
  	marginBottom: 8,
  	marginTop: 3
  },
  textlink: {
    fontSize: 12
  },
  textlink2: {
    fontSize: 17,
    color: '#c01820',
    marginTop: 22
  }
});

var _scrollView: ScrollView;

// pageChina = () =>  {
//   this.props.navigator.push({
//     title: "China",
//     component: PageChina
//   });
// }

export default class Header extends Component{
  constructor() {
    super();
  }
  
  topStories = () =>  {
    this.props.navigator.push({
      title: "Top Stories",
      component: TopStories
    });
  }

  communityLink = () => {
    this.props.navigator.push({
      title: "Community",
      component: Community
    });
  }

  startupLink = () => {
    this.props.navigator.push({
      title: "Startup",
      component: Startup
    });
  }

  engineerLink = () => {
    this.props.navigator.push({
      title: "Engineer",
      component: Engineer
    });
  }

  designLink = () => {
    this.props.navigator.push({
      title: "Design",
      component: Design
    });
  }

  mobileLink = () => {
    this.props.navigator.push({
      title: "Mobile",
      component: Mobiles
    });
  }

  ecommerceLink = () => {
    this.props.navigator.push({
      title: "Ecommerce",
      component: Ecommerce
    });
  }

  allCategories = () =>{
    this.props.navigator.push({
      title: "All Categories",
      component: AllCategories
    });
  }

  animatedLink = () =>{
    this.props.navigator.push({
      title: "Animated Link",
      component: AnimatedEx
    });
  }

  render(){
    return(
      <View style={styles.container}>
        <ScrollView
          ref={(scrollView) => { _scrollView = scrollView; }}
          automaticallyAdjustContentInsets={false}
          horizontal={true}
          style={[styles.scrollView, styles.horizontalScrollView]}>
          <View style={styles.wrapper}>
          	
            <TouchableHighlight onPress={this.topStories} style={styles.button}>
              <View style={styles.cat} elevation={5}>
                  <Image style={styles.image} source={require('./images/topnews.png')} />
              		<Text style={styles.textlink}>Top Stories</Text>
              </View>
          	</TouchableHighlight>
            
            <TouchableHighlight onPress={this.communityLink} style={styles.button}>
              <View style={styles.cat}>
                <Image style={styles.image} source={require('./images/community.png')} />
                <Text style={styles.textlink}>Community</Text>
              </View>
            </TouchableHighlight>

            <TouchableHighlight onPress={this.startupLink} style={styles.button}>
              <View style={styles.cat}>
                <Image style={styles.image} source={require('./images/startup.png')} />
                <Text style={styles.textlink}>Startup</Text>
              </View>
            </TouchableHighlight>

            <TouchableHighlight onPress={this.engineerLink} style={styles.button}>
              <View style={styles.cat}>
                <Image style={styles.image} source={require('./images/engineer.png')} />
                <Text style={styles.textlink}>Engineer</Text>
              </View>
            </TouchableHighlight>

            <TouchableHighlight onPress={this.designLink} style={styles.button}>
              <View style={styles.cat}>
                <Image style={styles.image} source={require('./images/design.png')} />
                <Text style={styles.textlink}>Design</Text>
              </View>
            </TouchableHighlight>

            <TouchableHighlight onPress={this.mobileLink} style={styles.button}>
            <View style={styles.cat}>
              <Image style={styles.image} source={require('./images/mobile.png')} />
              <Text style={styles.textlink}>Mobile</Text>
            </View>
            </TouchableHighlight>

            <TouchableHighlight onPress={this.ecommerceLink} style={styles.button}>
              <View style={styles.cat}>
                <Image style={styles.image} source={require('./images/ecommerce.png')} />
                <Text style={styles.textlink}>Ecommerce</Text>
              </View>
            </TouchableHighlight>

            <TouchableHighlight onPress={this.allCategories} style={styles.button}>
              <View style={styles.cat}>
                <Text style={styles.textlink2}>See All</Text>
              </View>
            </TouchableHighlight>
            
          </View>
        </ScrollView>
      </View>
    );
  }

}
// const Header = (props) => (
  
// );
module.exports = Header;
// export default Header;