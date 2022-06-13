import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Pressable, Text, TextInput} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import Slider from '@react-native-community/slider';
import styles from './Settings.style';
import EditBoard from '../../components/EditBoard';
import bdata from '../../data/BoardData';
import options from '../../data/TtsData';
const updateTtsRateData = value => {
  options[1] = value;
};

const updateTtsPitchData = value => {
  options[2] = value;
};
export default function Settings() {
  const [board, updateBoard] = React.useState('');
  return (
    <View style={styles.container}>
      <View style={styles.ttsOptions}>
        <Text style={styles.title}>Text To Speech Ayarları</Text>
        <Text style={styles.title}>Hız</Text>
        <Slider
          style={styles.slider}
          minimumValue={0}
          maximumValue={1.25}
          minimumTrackTintColor="black"
          maximumTrackTintColor="#000000"
          onSlidingComplete={value => updateTtsRateData(value)}
        />
        <Text style={styles.title}>Tizlik</Text>
        <Slider
          style={styles.slider}
          minimumValue={0}
          maximumValue={1.25}
          minimumTrackTintColor="black"
          maximumTrackTintColor="#000000"
          onSlidingComplete={value => updateTtsPitchData(value)}
        />
      </View>
    </View>
  );
}
