'use strict';

import React, { Component } from 'react';
import BookList from './BookList';
import {
   View,
   ListView,
   Text,
   StyleSheet,
   Image,
   ScrollView
} from 'react-native';

import HTMLView from 'react-native-htmlview';
import Share, {ShareSheet, Button} from 'react-native-share';
// import HTML from 'react-native-fence-html';

class BookDetail extends Component{
	render(){
		var posts = this.props.posts;
    var imageURI = (typeof posts.featured_image.source !== 'undefined') ? posts.featured_image.source : '';
    var description = (typeof posts.content !== 'undefined') ? posts.content : '';
    var title = (typeof posts.title !== 'undefined') ? posts.title: ''; 
    
    var contentView =(
      <View style={styles.container}>
        <View style={styles.topWrapper}> 
          <Image 
            source={{uri: posts.author.avatar_url}} 
            style={styles.thumbnailPeople}
          />
          <View style={styles.rightTop}>
            <Text style={styles.people}>{posts.author.display_name}</Text>
            <Text style={styles.date}>{posts.date_gmt.substring(0,10)}</Text>
          </View>
        </View>
        <View style={styles.wrapImage}>
          <Image
            source={{uri: (posts.featured_image.source) ? posts.featured_image.source : "https://placeimg.com/640/480/any" }}
            style={styles.thumbnail} />
        </View>
        <View style={styles.imageContainer}><Image style={styles.image} source={{uri: imageURI}} /></View>
        <View style={styles.wrapDescription}>
          <HTMLView value={description} stylesheet={styles} />
          
        </View>
      </View>
    );

    return (
        <ScrollView>
          {contentView}
        </ScrollView>
    );
	}
}

const styles = StyleSheet.create({
  container: {
    marginTop: 5,
    flex: 0,
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    marginBottom: 12
  },
  image: {
    flex: 1,
    width: null,
    height: 180,
    alignItems: 'center'
  },
  imageContainer: {
    flex: 0,
    flexDirection: 'row',
    marginBottom: -10
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'left',
    marginTop: -5,
    marginBottom: 10,
    lineHeight: 24,
    padding: 15
  },
  wrapDescription: {
    padding: 20
  },
  description :{
    color: '#333333',
    fontSize: 16
  },
  a: {
    color: '#FF3366',
    fontSize: 18
  },
  p: {
    lineHeight: 25,
    fontSize: 18
  },
  topWrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginLeft: 10
  },
  thumbnailPeople: {
    width: 32,
    height: 32,
    backgroundColor: '#dddddd',
    borderRadius: 32/2
  },
  rightTop: {
    flex: 1,
    marginLeft: 10,
  },
  date: {
    color: '#999999',
    fontSize: 12,
    marginTop: -2,
    flex: 1
  },
  people:{
    color: '#c01820',
    marginBottom: 5,
    fontSize: 12
  },
  em: {
    color: '#dddddd',
    fontSize: 18,
    borderColor: 'black',
    borderWidth: 3,
    paddingLeft: 10
  },
  strong: {
    color: '#8f8f8f',
    fontSize: 20,
    lineHeight: 26,
    borderLeftColor: 'black',
    borderLeftWidth: 3,
    paddingLeft: 10,
    fontStyle: 'italic'
  },
  em: {
    color : '#333333',
    fontSize : 18
  },
  li: {
    marginLeft: 15,
    fontSize: 18,
    marginBottom: -40,
    marginTop: -20,
    color: '#333333'
  }
});

module.exports = BookDetail;