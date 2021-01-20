import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import MapView from 'react-native-maps';
import MapList from '../components/MapList';

const height = Dimensions.get('window').height;
const Map = ({ data }) => {
  return (
    <MapView
      style={styles.map}
      loadingEnabled={true}
      region={{
        latitude: 54,
        longitude: -4,
        latitudeDelta: 14,
        longitudeDelta: 10,
      }}
      showsUserLocation
    >
      <MapList data={{ ...Object.values(data) }} />
    </MapView>
  );
};

const styles = StyleSheet.create({
  map: { height },
});

export default Map;
