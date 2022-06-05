import React, {useState , useRef} from 'react';
import { View, StyleSheet, Pressable, Text } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import deneme from '../screens/Homepage/Homepage.style';

function ButtonsTts({input}) {

  const isSpeaking = useRef(false);
  const clickedResume = useRef(false);

  let i = 0;

  const speak = () => {
    const options = {
      language: 'tr-TR',
      rate: 1.1,
      pitch: 0.9,
    };

    const prompt = input.split(" ");
    isSpeaking.current = true;

    if(clickedResume.current == false){
      i = 0;
    }

    while (i < prompt.length) {
      output(i);
      i++;
    }
    
    function output(i) {
      setTimeout(function() {
        if (isSpeaking.current == true) {
          Speech.speak(prompt[i], options);
        }
      }, 1000 * i);
    }
    
  };

  const pause = () => {
    isSpeaking.current = false;
 };

 // Reminder to improve here when you have the chance
  const resume = () => {
    if (i > 0 && isSpeaking.current == false ) {
      clickedResume.current = true;
      speak();
      clickedResume.current = false;
    } 
  };

  return (
    <View style={deneme.container}>
    <Pressable style={({pressed}) => [
      {
        backgroundColor: pressed
        ? '#ff8811'
        : '#9dd9d2'
      },
      styles.button
    ]} onPress={speak}>
     <Ionicons name={'ios-megaphone'} size={24} color='#392f5a' />
   </Pressable>

<Pressable style={({pressed}) => [
  {
    backgroundColor: pressed
    ? '#ff8811'
    : '#9dd9d2'
  },
  styles.button
]} onPress={pause}>
 <Ionicons name={'stop-circle-sharp'} size={24} color='#392f5a' />
</Pressable>

<Pressable style={({pressed}) => [
  {
    backgroundColor: pressed
    ? '#ff8811'
    : '#9dd9d2'
  },
  styles.button
]} onPress={resume}>
 <Ionicons name={'play-forward'} size={24} color='#392f5a' />
</Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
    button: {
        marginTop: 50,
        paddingVertical: 20,
        paddingHorizontal: 20,
        borderRadius: 50,
      },
      text: {
        fontSize: 16,
        color: '#392f5a',
        lineHeight: 21,
        fontFamily: "Montserrat_SemiBold",
        letterSpacing: 0.25,
      },
})

export default ButtonsTts;