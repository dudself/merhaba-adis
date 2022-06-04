import React, {useState, useEffect, useCallback} from 'react';
import { View, StyleSheet, Button, Text } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import Home from "./src/screens/Homepage";

import { initializeApp } from 'firebase/app';
import { getDatabase } from "firebase/database";


const firebaseConfig = {
  apiKey: "AIzaSyC1tD-937AtGyYnE_A1Cf9tx74oUiL2jUw",
  authDomain: "merhaba-adis.firebaseapp.com",
  databaseURL: "https://merhaba-adis-default-rtdb.firebaseio.com",
  projectId: "merhaba-adis",
  storageBucket: "merhaba-adis.appspot.com",
  messagingSenderId: "41231347524",
  appId: "1:41231347524:android:17598f400485377ad07111",
  // measurementId: "G-MEASUREMENT_ID",
};

const app = initializeApp(firebaseConfig);

const database = getDatabase(app);


export default function App() {

const [isAppReady, setIsAppReady] = useState(false);

// Landing Page 
 useEffect (() => {
   async function prepare() {
     try {
      // Landing page'i yükleme yaparken açık tutmasının yanı sıra hideAsync çağırılana kadar splash page gösteriyor
      //  await SplashScreen.preventAutoHideAsync();
       await Font.loadAsync({
        'Montserrat_SemiBold': require('./assets/fonts/Montserrat-SemiBold.ttf'),
      });
      // 2 Saniye daha splash screen döndür
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
     <Home />
    );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  }
});