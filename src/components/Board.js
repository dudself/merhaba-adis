import React, {useState} from 'react';
import {View, Text, Image, StyleSheet, Pressable} from 'react-native';
import {FlatGrid} from 'react-native-super-grid';

import bdata from '../data/BoardData';

export default function Board() {
  const [items, setItems] = React.useState(bdata);

  return (
    <FlatGrid
      itemDimension={100}
      data={items}
      style={styles.gridView}
      spacing={10}
      renderItem={({item}) => (
        <View style={[styles.card, {backgroundColor: item.bgColor}]}>
          <Pressable onPress={() => console.log('hello')}>
            <Image style={styles.symbol} source={item.symbol} />
            <Text style={[styles.text, {color: item.textColor}]}>
              {item.text}
            </Text>
          </Pressable>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  gridView: {
    marginTop: 10,
    flex: 1,
  },
  card: {
    justifyContent: 'space-evenly',
    borderRadius: 5,
    padding: 20,
  },
  symbol: {
    alignItems: 'center',
    width: 50,
    height: 50,
  },
  text: {
    textAlign: 'center',
    fontSize: 16,
    fontFamily: 'Montserrat_SemiBold',
    letterSpacing: 0.25,
  },
});
