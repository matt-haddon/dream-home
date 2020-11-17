import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Form from './screens/Form';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import MapScreen from './screens/MapScreen';
import { setNavigator } from './routes/navigationRef';
import MapView from 'react-native-maps';
import Navigator from './routes/homeStack';
import Welcome from './screens/Welcome';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';

const getFonts = () => {
  return Font.loadAsync({
    Quicksand_Light: require('./assets/font/Quicksand-Light.otf'),
    Quicksand_Regular: require('./assets/font/Quicksand-Regular.otf'),
    Quicksand_BoldItalic: require('./assets/font/Quicksand-BoldItalic.otf'),
    Quicksand_Italic: require('./assets/font/Quicksand-Italic.otf'),
    Quicksand_Bold: require('./assets/font/Quicksand-Bold.otf'),
  });
};

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  if (fontsLoaded) {
    return <Navigator />;
  } else {
    return (
      <AppLoading startAsync={getFonts} onFinish={() => setFontsLoaded(true)} />
    );
  }
}
