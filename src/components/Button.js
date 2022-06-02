import React from 'react';
import { View, StyleSheet, Pressable, Text } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

const Button = ({onPress, content}) => {
    return (
    <Pressable style={styles.button} onPress={onPress}>
     <Ionicons name={content} size={24} color='#392f5a' />
   </Pressable>
    )
}

const styles = StyleSheet.create({
    button: {
        marginTop: 50,
        paddingVertical: 20,
        paddingHorizontal: 20,
  
        borderRadius: 50,
        backgroundColor: '#9dd9d2',
        
      },
  
      text: {
        fontSize: 16,
        color: '#392f5a',
        lineHeight: 21,
        fontFamily: "Montserrat_SemiBold",
        letterSpacing: 0.25,
      },
})

export default Button;