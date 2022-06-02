import React from 'react';
import { View, StyleSheet, Pressable, Text, TextInput } from 'react-native';
import styles from './Homepage.style';
import * as Speech from 'expo-speech';
import Ionicons from '@expo/vector-icons/Ionicons';

import Button from '../../components/Button';


export default function Homepage(){

  const [input, setInput] = React.useState("");
  const [speaking, isSpeaking] = React.useState(false);

  // Konuşma
  const speak = () => {
    const options = {
      language: "tr-TR",
      rate: 1.05,
      pitch: 0.9
    };
    Speech.speak(input, options);
    onStart:() => isSpeaking(true);
  };

  // Durdur & kaldığın yerden devam et 
  const pauseResume = () => {
    if(isSpeaking == true) {
      Speech.pause();
      onPause:() => isSpeaking(false);
    }
    else {
      Speech.resume();
      onResume:() => isSpeaking(true);
    }
  };


   return (

   <View style={styles.container}>

    <TextInput style={styles.input} onChangeText={(text) => setInput(text)} />
    <Button onPress={speak} content= {'ios-megaphone'}/>
    <Button onPress={pauseResume} content={'stop-circle-sharp'}/>

 </View>
 );
}