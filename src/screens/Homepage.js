import React from 'react';
import { View, StyleSheet, Pressable, Text, TextInput } from 'react-native';
import * as Speech from 'expo-speech';
import { SpeechOptions } from 'expo-speech';


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

   <Pressable style={styles.button} onPress={speak}>
    <Text style={styles.text}>Konuş</Text>
   </Pressable>

   <Pressable style={styles.button} onPress={pauseResume}>
   <Text style={styles.text}>Durdur / Devam et</Text>
   </Pressable>

 </View>
 );
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'flex-start',
      padding: 8,
    },

    input: {
      marginTop: 100,
      alignItems: 'center',
      justifyContent: 'center',
      width : 350,
      borderColor: '#392f5a',
      borderRadius: 15,
      borderWidth: 5,
      padding: 10,
    },

    button: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 12,
      paddingHorizontal: 32,
      marginTop: 10,
      borderRadius: 15,
      backgroundColor: '#9dd9d2',
    },

    text: {
      color: '#392f5a',
      fontSize: 16,
      lineHeight: 21,
      fontFamily: "Montserrat_SemiBold",
      letterSpacing: 0.25,
    },
})
