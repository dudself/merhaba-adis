import React, {useState , useRef} from 'react';
import { View, StyleSheet, Pressable, Text, TextInput } from 'react-native';
import styles from './Homepage.style';
import * as Speech from 'expo-speech';
import Ionicons from '@expo/vector-icons/Ionicons';

import ButtonsTts from '../../components/ButtonsTts';
import Card from '../../components/Card';

export default function Homepage() {
  const {input, setInput} = React.useState('');
 
  return (
    <View>
      <TextInput style={styles.input} onChangeText={(text) => setInput(text)} />
      <ButtonsTts input={input} />
      {/* <Card onPress={speak} text={'Merhaba Ben Vin'} icon={icon}/> */}
    </View>
  );
}
