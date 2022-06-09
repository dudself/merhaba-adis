import React from 'react';
import {View, StyleSheet, Pressable} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

const Button = ({onPress, content}) => {
  return (
    <Pressable
      style={({pressed}) => [
        {
          backgroundColor: pressed ? '#ef233c' : '#2b2d42',
        },
        styles.button,
      ]}
      onPress={onPress}
    >
      <Ionicons name={content} size={24} color="#edf2f4" />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    marginVertical: 25,
    marginHorizontal: 20,
    paddingVertical: 22,
    paddingHorizontal: 22,
    borderRadius: 50,
  },
});

export default Button;
