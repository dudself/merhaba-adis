import React from 'react';
import {View, StyleSheet, Pressable, Text} from 'react-native';

const Card = ({onPress, text}) => {
  return (
    <Pressable
      style={({pressed}) => [
        {
          backgroundColor: pressed ? 'white' : 'light-gray',
        },
        styles.card,
      ]}
      onPress={onPress}
    ></Pressable>
  );
};

const styles = StyleSheet.create({
  card: {
    marginTop: 50,
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderRadius: 10,
  },

  text: {
    fontSize: 16,
    color: '#392f5a',
    lineHeight: 21,
    fontFamily: 'Montserrat_SemiBold',
    letterSpacing: 0.25,
  },
});

export default Card;
