import React from 'react';
import { View, StyleSheet, Pressable, Text } from 'react-native';
import IconPicker from "react-native-icon-picker";

const Card = ({iconLibrary, onPress, text, icon}) => {
    return (
        <Pressable style={({pressed}) => [
            {
                backgroundColor: pressed
        ? 'white'
        : 'light-gray'
            },
            styles.card
        ]}
        onPress={onPress}>
         <{iconLibrary} name={icon.name} size={30} color={icon.color}/>
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