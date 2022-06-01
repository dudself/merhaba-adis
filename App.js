import * as React from 'react';
import { View, StyleSheet, Button, Text } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import Homepage from "./src/screens/Homepage";

export default function App() {

  let [fontsLoaded] = useFonts({
    'Montserrat_SemiBold': require('./assets/fonts/Montserrat-SemiBold.ttf'),
  });

  if (!fontsLoaded) {
    return (
      <AppLoading
        startAsync={this._cacheResourcesAsync}
        onFinish={() => this.setState({ isReady: true })}
        onError={console.warn}
      />
    ); 
  }
  
  else {
    
    return (
     <Homepage />
    );
}

// const cacheImages = images.map(image => {
//   return Asset.fromModule(image).downloadAsync();
// }); 

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