import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Button, Text } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts, getFonts } from 'expo-font';
import Homepage from "./src/screens/Homepage";

export default function App() {

  const [fontsLoaded, setFontLoad] = useState(false);

  useEffect(() => {
    (async () => {
      await Font.loadAsync({
        'Mont': require('./assets/fonts/Montserrat-SemiBold.ttf')
      }).then(() => {
        setFontLoad(true);
      })
    })();
  }, [])

  if (!fontsLoaded) {
    return (
      <AppLoading startAsync={getFonts} onFinish={() => {
        setFontLoad(true)
      }} onError={console.warn} />
    ); 
  }
  
  else {
    
    return (
     <Homepage />
    );
}

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  Texts: {
    marginTop: 10,
    color: 'black',
    padding:10,
  }
});