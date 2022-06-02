import React, {useState} from 'react';
import { View, StyleSheet, Button, Text } from 'react-native';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import Homepage from "./src/screens/Homepage";

export default function App() {



 const fontLoad = () => {
    return Font.loadAsync({
      'Montserrat_SemiBold': require('./assets/fonts/Montserrat-SemiBold.ttf'),
    }); 
  };

  const [isFontLoaded, setIsFontLoaded] = useState(false);

  if (!isFontLoaded) {
    return (
      <AppLoading
      startAsync={fontLoad}
      onFinish={() => setIsFontLoaded(true)}
      onError={(err) => console.log(err)}
      />
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