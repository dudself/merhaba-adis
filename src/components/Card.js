import React from 'react';
import { View, StyleSheet, Pressable, Text } from 'react-native';
import IconPicker from "react-native-icon-picker";
import inputHook from '../screens/Homepage/Homepage.js';
import AntDesign from '@expo/vector-icons/AntDesign';

const Card = ({onPress, text, icon}) => {
    const {input, setInput} = inputHook();
    return (
        <Pressable style={({pressed}) => [
            {
                backgroundColor: pressed
        ? 'white'
        : 'light-gray'
            },
            styles.card
        ]}
        onPress={onPress} 
        onPressIn={(text) =>setInput(text)}>
         <AntDesign name={icon.name} size={30} color={icon.color}/>
        </Pressable>
    )
}

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
        fontFamily: "Montserrat_SemiBold",
        letterSpacing: 0.25,
      },
})

export default Card;