import React, {Component} from 'react';

import {StyleSheet, ScrollView, ActivityIndicator, View} from 'react-native';
import {ListItem} from 'react-native-elements';
import firebase from '../../config/firebase';

class FetchListScreen extends Component {
  constructor() {
    super();
    this.docs = firebase.firestore().collection('boards/genel');
    this.state = {
      isLoading: true,
      genel: [],
    };
  }

  componentDidMount() {
    this.unsubscribe = this.docs.onSnapshot(this.getStudentsData);
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  getGenelData = querySnapshot => {
    const genel = [];
    querySnapshot.forEach(res => {
      const {bgColor, textColor, text, symbol} = res.data();
      genel.push({
        key: res.id,
        bgColor,
        textColor,
        text,
        symbol,
      });
    });
    this.setState({
      genel,
      isLoading: false,
    });
  };

  render() {
    if (this.state.isLoading) {
      return (
        <View style={styles.loader}>
          <ActivityIndicator size="large" color="red" />
        </View>
      );
    }
    return (
      <ScrollView style={styles.wrapper}>
        {this.state.genel.map((res, i) => {
          return (
            <ListItem key={i} bottomDivider>
              <ListItem.Content>
                <ListItem.Title>{res.text}</ListItem.Title>
                <ListItem.Subtitle>{res.textColor}</ListItem.Subtitle>
                <ListItem.Subtitle>{res.bgColor}</ListItem.Subtitle>
              </ListItem.Content>
              <ListItem.Chevron color="black" />
            </ListItem>
          );
        })}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    paddingBottom: 22,
  },
  loader: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
});

export default FetchListScreen;
