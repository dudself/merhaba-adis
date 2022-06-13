import React, {useState, useEffect, useCallback} from 'react';
import {View, StyleSheet, Button, Text} from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import Home from './src/screens/Homepage';
import SettingsScr from './src/screens/Settings';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

export default function App() {
  const Stack = createNativeStackNavigator();
  const [isAppReady, setIsAppReady] = useState(false);

  // Landing Page
  useEffect(() => {
    async function prepare() {
      try {
        // Landing page'i yükleme yaparken açık tutmasının yanı sıra hideAsync çağırılana kadar splash page gösteriyor
        //  await SplashScreen.preventAutoHideAsync();
        await Font.loadAsync({
          Montserrat_SemiBold: require('./src/assets/fonts/Montserrat-SemiBold.ttf'),
        });
        // 2 Saniye daha splash screen döndür
        await new Promise(resolve => setTimeout(resolve, 150));
      } catch (e) {
        console.warn(e);
      } finally {
        setIsAppReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (isAppReady) {
      await SplashScreen.hideAsync();
    }
  }, [isAppReady]);

  if (!isAppReady) {
    return null;
  }

  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        screenOptions={{
          drawerStyle: {
            backgroundColor: '#FFD700',
          },
          drawerLabelStyle: {
            fontSize: 16,
            color: '#392f5a',
            lineHeight: 21,
            fontFamily: 'Montserrat_SemiBold',
            letterSpacing: 0.25,
          },
          drawerContentStyle: {
            fontSize: 16,
            color: '#392f5a',
            lineHeight: 21,
            fontFamily: 'Montserrat_SemiBold',
            letterSpacing: 0.25,
          },
        }}
      >
        <Drawer.Screen
          name="Anasayfa"
          component={Home}
          options={{drawerLabel: 'Anasayfa'}}
        />
        <Drawer.Screen
          name="Ayarlar"
          options={{drawerLabel: 'Ayarlar'}}
          component={SettingsScr}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  drawerNaw: {
    backgroundColor: 'yellow',
    fontSize: 16,
    color: '#392f5a',
    lineHeight: 21,
    fontFamily: 'Montserrat_SemiBold',
    letterSpacing: 0.25,
  },
});
