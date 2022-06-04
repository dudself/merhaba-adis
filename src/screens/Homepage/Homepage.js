import React, {useState , useRef} from 'react';
import { View, StyleSheet, Pressable, Text, TextInput } from 'react-native';
import styles from './Homepage.style';
import * as Speech from 'expo-speech';
import Ionicons from '@expo/vector-icons/Ionicons';

import Button from '../../components/Button';

export default function Homepage() {
  
  const [input, setInput] = React.useState('');
  const isSpeaking = useRef(false);
  const clickedResume = useRef(false);

  let i = 0;

  // Konuşma 
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
        console.log(i);
        output(i);
        i++;
      }
      
      function output(i) {
        setTimeout(function() {
          if (isSpeaking.current == true) {
            // if (clickedResume.current == true) {
            //   i--;
            //   console.log(i);
            //   Speech.speak(prompt[i], options);
            // } else {
            // Speech.speak(prompt[i], options);
            // }
            Speech.speak(prompt[i], options);
          }
        }, 1000 * i);
      }
      
    };

    const pause = () => {
      isSpeaking.current = false;
   };

    const resume = () => {
      if (i > 0 && isSpeaking.current == false ) {
        clickedResume.current = true;
        speak();
        clickedResume.current = false;
      } 
    };
  

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} onChangeText={(text) => setInput(text)} />
      <Button onPress={speak} content={'ios-megaphone'} />
      <Button onPress={pause} content={'stop-circle-sharp'} />
      <Button onPress={resume} content={'play-forward'} />
    </View>
  );
}
