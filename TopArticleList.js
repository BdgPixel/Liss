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
  Image
} from 'react-native';

import HTMLView from 'react-native-htmlview';
import TopArticleDetail from './TopArticleDetail';
import Icon from 'react-native-vector-icons/Ionicons';

var REQUEST_ARTICLE = 'https://www.techinasia.com/wp-json/techinasia/2.0/posts/top?';
export class TopArticleList extends Component{
	constructor(props) {
    super(props);
  
    this.state = {
      isLoading: true,
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2
      })
    };
  }

  componentDidMount(){
    this.fetchData();
  }
  fetchData(){
    fetch(REQUEST_ARTICLE)
    .then((response) => response.json())
    .then((responseData) => {
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(responseData.posts),
        isLoading: false
      });
    })
    .done();
  }

  render(){
    return(
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderArticle.bind(this)}
        style={styles.listView}
      />
    );
	}

  renderLoadingView(){
    return(
      <View style={styles.loading}>
        <ActivityIndicatorIOS size='large' />
        <Text>Loading...</Text>
      </View>
    );
  }

  renderArticle(posts){
    var description = (typeof posts.content !== 'undefined') ? posts.content : '';
    return(
      <TouchableHighlight onPress={() => this.showArticleDetail(posts)}  underlayColor='#dddddd'>
        <View>
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
            
            <View style={styles.rightContainer}>
              <Text style={styles.title} numberOfLines={3}>{posts.title}</Text>
              <Text style={styles.descWrap} numberOfLines={4}>
                <HTMLView value={description} stylesheet={styles}/>
              </Text>
              <View style={styles.separatorDesc}></View>
              <View style={styles.bottomContent}>
                <View style={styles.containerBottom1}>
                  <Text style={styles.icon}><Icon name="ios-chatboxes-outline" size={22} color="#900" /></Text>
                  <Text style={styles.textDet}>{posts.comments_count}</Text>
                </View>
                <View style={styles.containerBottom}>
                  <View style={styles.textWrap}>
                    <Text style={styles.textDet2}>{posts.read_time}</Text>
                  </View>
                  <View style={styles.textWrap}>  
                    <Text style={styles.textDet2}> Read Time</Text>
                  </View>
                  <View style={styles.textWrap}>
                    <Text style={styles.share}><Icon name="ios-more-outline" size={35} color="#999999" /></Text>
                  </View>
                </View>
              </View>
            </View>
            
          </View>
        </View>
      </TouchableHighlight>
    );
  }

  showArticleDetail(posts){
    this.props.navigator.push({
      title: posts.title,
      component: TopArticleDetail,
      passProps: {posts},
      tintColor: '#ffffff',
      rightButtonTitle: 'Share',
      // rightButtonSystemIcon: 'bookmarks',
      fontSize: 10
    });
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 0,
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    padding: 17,
    paddingBottom: 13,
    marginBottom: 12,
    borderColor: '#dddddd',
    borderWidth: 1
  },
  wrapImage :{
    flex: 1,
    alignItems: 'stretch'
  },
  listviews :{
    flex: 1,
    height: null
  },
  imageBig: {
    flex: 1,
    flexDirection: 'row'
  },
  thumbnail: {
    flex: 1,
    width: null,
    height: 90,
    alignItems: 'center'
  },
  rightContainer: {
    flex: 1,
    marginTop: -5
  },
  separator: {
    height: 1,
    backgroundColor: '#dddddd',
    flex: 1
  },
  listView: {
    backgroundColor: '#FAFAFA',
    flex: 1
  },
  loading: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  thumbnailPeople: {
    width: 32,
    height: 32,
    backgroundColor: '#dddddd',
    borderRadius: 32/2
  },
  topWrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10
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
  p: {
    color: '#0c0c0c',
    fontSize: 15,
    lineHeight: 24,
    fontWeight: '300',
    marginBottom: -40
  },
  a: {
    color: '#0c0c0c'
  },
  strong: {
    color: '#0c0c0c',
    fontSize: 15,
    fontWeight: '300',
    lineHeight: 19,
    marginBottom: -100
  },
  title: {
    fontSize: 24,
    lineHeight: 27,
    marginTop: 15,
    fontWeight: 'bold',
    color: '#0c0c0c',
    marginBottom: -8
  },
  descWrap: {
    marginTop: -12,
    backgroundColor: 'transparent'
  },
  separatorDesc: {
    height: 1,
    marginTop: 13,
    marginBottom: 10,
    backgroundColor: '#ededed',
    flex: 1
  },
  horizontalScrollView: {
    height: 120,
  },
  bottomContent: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  containerBottom1: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  containerBottom: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  textDet: {
    flex: 0,
    marginLeft: 8,
    color: '#999999'
  },
  icon: {
    flex: 0
  },
  textwrap: {
    flex: 1,
    // flexDirection: 'row',
    // alignItems: 'center'
    // color: '#999999'
  },
  textDet2: {
    flex: 0,
    color: '#999999'
  },
  share: {
    color: '#999999',
    marginTop: 3
  }
});

module.exports = TopArticleList;