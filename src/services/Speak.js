import React, {useState} from 'react';
import * as Speech from 'expo-speech';
import options from '../data/TtsData';

export default function Speak(prompt, i, clickedResume, isSpeaking) {
  isSpeaking.current = true;
  let ttsOptions = {
    language: options[0],
    rate: options[1],
    pitch: options[2],
  };
  if (clickedResume.current == false) {
    i = 0;
  }

  while (i < prompt.length) {
    output(i);
    i++;
  }

  function output(i) {
    setTimeout(function () {
      if (isSpeaking.current == true) {
        Speech.speak(prompt[i], ttsOptions);
      }
    }, 500 * i);
  }

  return i;
}
