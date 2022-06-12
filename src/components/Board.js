import React, {useState} from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import {FlatGrid} from 'react-native-super-grid';

export default function Board() {
  const [items, setItems] = React.useState([
    {name: 'TURQUOISE', code: '#1abc9c'},
    {name: 'EMERALD', code: '#2ecc71'},
    {name: 'PETER RIVER', code: '#3498db'},
    {name: 'AMETHYST', code: '#9b59b6'},
  ]);
  return (
    <FlatGrid
      data={items}
      itemDimension={150}
      spacing={10}
      renderItem={({item}) => (
        <View styles={[styles.card, {backgroundColor: item.code}]}>
          <Pressable onPress={() => console.log('hello')}>
            <Text styles={{fontColor: 'white'}}>{item.name}</Text>
          </Pressable>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  card: {
    justifyContent: 'flex-end',
    fontSize: 22,
    borderRadius: 5,
    padding: 10,
  },
});
