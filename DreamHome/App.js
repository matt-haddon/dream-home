import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Form from './screens/Form';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import MapScreen from './screens/MapScreen';
import MapListScreen from './screens/MapListScreen';
import { setNavigator } from './routes/navigationRef';
import MapView from 'react-native-maps';
import Navigator from './routes/homeStack';
import Welcome from './screens/Welcome';

export default function App() {
  return <Navigator />;
}
