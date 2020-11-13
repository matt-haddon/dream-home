import React from 'react';
import { SafeAreaView } from 'react-navigation';
import { Text, StyleSheet } from 'react-native';
// import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

const MapScreen = ({ navigation }) => {
  return (
    <SafeAreaView forceInset={{ top: 'always' }}>
      <Text style={{ fontSize: 50 }}>MapScreen</Text>
      {/* <MapView
        provider={PROVIDER_GOOGLE}
        style={{ flex: 1 }}
        region={{
          lattitude: 42.88,
          longtitude: 74.58,
          lattitudeDelta: 0.0922,
          longtitudeDelta: 0.0421,
        }}
        showsUserLocation
      /> */}
    </SafeAreaView>
  );
};

export default MapScreen;
