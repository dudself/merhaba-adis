import React, {useState, useEffect, useCallback} from 'react';
import { View, StyleSheet, Button, Text } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import Homepage from "./src/screens/Homepage";

export default function App() {
const [isAppReady, setIsAppReady] = useState(false);

 useEffect (() => {
   async function prepare() {
     try {
      //  await SplashScreen.preventAutoHideAsync();
       await Font.loadAsync({
        'Montserrat_SemiBold': require('./assets/fonts/Montserrat-SemiBold.ttf'),
      });
      await new Promise(resolve => setTimeout(resolve, 500));
     } catch (e) {
      console.warn(e);
     } finally {
      setIsAppReady(true);
     }
   }

   prepare();
 }, []);

 const onLayoutRootView = useCallback(async () => {
   if(isAppReady) {
     await SplashScreen.hideAsync();
   }
 }, [isAppReady]);
  

  if (!isAppReady) {
    return null;
  }
  
  return (
     <Homepage />
    );
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