import React from 'react';
import { SafeAreaView } from 'react-navigation';
import { Text, StyleSheet } from 'react-native';
import Map from '../components/Map';

const MapScreen = ({ navigation }) => {
  console.log(navigation.state.params);
  return (
    <SafeAreaView forceInset={{ top: 'always' }}>
      <Map data={navigation.state.params} />
    </SafeAreaView>
  );
};

export default MapScreen;
