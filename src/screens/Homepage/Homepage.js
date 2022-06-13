import React, {useState, useEffect, useRef} from 'react';
import {View, StyleSheet, Pressable, Text, TextInput} from 'react-native';
import * as Speech from 'expo-speech';
import Ionicons from '@expo/vector-icons/Ionicons';

import styles from './Homepage.style';

import Button from '../../components/Button';
import Board from '../../components/Board';
import Speak from '../../services/Speak';

export default function Homepage() {
  let [input, setInput] = React.useState('');
  const [board, updateBoard] = React.useState('');
  const isSpeaking = useRef(false);
  const clickedResume = useRef(false);
  var i = 0;

  const speakTTS = () => {
    const prompt = input.split(' ');
    i = Speak(prompt, i, clickedResume, isSpeaking);
  };

  const pause = () => {
    isSpeaking.current = false;
  };

  // Reminder to improve here when you have the chance
  const resume = () => {
    if (i > 0 && isSpeaking.current == false) {
      clickedResume.current = true;
      speakTTS();
      clickedResume.current = false;
    }
  };

  //Update Function + listener (?)
  const update = boardInput => {
    updateBoard(boardInput);
  };

  useEffect(() => {
    setInput(input + ' ' + board);
  }, [board]);

  return (
    <View style={styles.container}>
      <View style={styles.tts}>
        <TextInput
          style={styles.input}
          value={input}
          onChangeText={text => setInput(text)}
        />
        <View style={styles.buttonMap}>
          <Button onPress={speakTTS} content={'ios-megaphone'} />
          <Button onPress={pause} content={'stop-circle-sharp'} />
          <Button onPress={resume} content={'play-forward'} />
        </View>
      </View>
      <View style={styles.board}>
        <Board onPress={update} />
      </View>
    </View>
  );
}
