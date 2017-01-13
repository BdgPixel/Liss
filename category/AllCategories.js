'use strict';

import React, { Component } from 'react';
import {
   View,
   ListView,
   StyleSheet,
   NavigatorIOS,
   ScrollView,
   Image,
   StatusBar
} from 'react-native';

import { Container, Content, List, ListItem, Thumbnail, Text } from 'native-base';

export default class AllCategories extends Component{
	render(){
		return(
      <Container style={styles.container}>
        <Content>
          <List>
            <ListItem>
              <Thumbnail source={require('../images/community.png')} />
              <Text>Ask Me Anything</Text>
            </ListItem>
            <ListItem>
              <Thumbnail source={require('../images/brand.png')} />
              <Text>Branded Content</Text>
            </ListItem>
            <ListItem>
              <Thumbnail source={require('../images/community.png')} />
              <Text>Community</Text>
            </ListItem>
            <ListItem>
              <Thumbnail source={require('../images/design.png')} />
              <Text>Design</Text>
            </ListItem>
            <ListItem>
              <Thumbnail source={require('../images/ecommerce.png')} />
              <Text>Ecommerce</Text>
            </ListItem>
            <ListItem>
              <Thumbnail source={require('../images/engineer.png')} />
              <Text>Engineering</Text>
            </ListItem>
            <ListItem>
              <Thumbnail source={require('../images/story.png')} />
              <Text>Founding Story</Text>
            </ListItem>
            <ListItem>
              <Thumbnail source={require('../images/investment.png')} />
              <Text>Investment</Text>
            </ListItem>
            <ListItem>
              <Thumbnail source={require('../images/mobile.png')} />
              <Text>Mobile</Text>
            </ListItem>
            <ListItem>
              <Thumbnail source={require('../images/new.png')} />
              <Text>New</Text>
            </ListItem>
            <ListItem>
              <Thumbnail source={require('../images/opinions.png')} />
              <Text>Opinions</Text>
            </ListItem>
            <ListItem>
              <Thumbnail source={require('../images/recruitment.png')} />
              <Text>Recruitment</Text>
            </ListItem>
            <ListItem>
              <Thumbnail source={require('../images/startup.png')} />
              <Text>Startup</Text>
            </ListItem>
            <ListItem>
              <Thumbnail source={require('../images/topnews.png')} />
              <Text>Top Story</Text>
            </ListItem>
          </List>
        </Content>
    </Container>  
		);
	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 70
  }
});

module.exports = AllCategories;