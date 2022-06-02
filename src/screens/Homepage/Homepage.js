import React, {useState , useRef} from 'react';
import { View, StyleSheet, Pressable, Text, TextInput } from 'react-native';
import styles from './Homepage.style';
import * as Speech from 'expo-speech';
import Ionicons from '@expo/vector-icons/Ionicons';

import Button from '../../components/Button';

export default function Homepage() {
  const [input, setInput] = React.useState('');
  const isSpeaking = useRef(false);

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
    
    do {
      Speech.speak(prompt[i], options);
      i++;
    } while (i < prompt.length && isSpeaking.current == true);
    
    isSpeaking.current = false;
    i = 0;

  };

  // Durdur & kaldığın yerden devam et
  const pauseResume = () => {
    if(isSpeaking.current == true) {
      isSpeaking.current = false;
    } else if (i > 0 && isSpeaking.current == false ) {
      isSpeaking.current = true;
      speak();
    } 
  };

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} onChangeText={(text) => setInput(text)} />
      <Button onPress={speak} content={'ios-megaphone'} />
      <Button onPress={pauseResume} content={'stop-circle-sharp'} />
    </View>
  );
}
