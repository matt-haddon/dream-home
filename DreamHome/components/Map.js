import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import MapView from 'react-native-maps';

const height = Dimensions.get('window').height;
const Map = () => {
  return (
    <MapView
      style={styles.map}
      loadingEnabled={true}
      region={{
        latitude: 52.5004,
        longitude: 13.3558,
        latitudeDelta: 0.015,
        longitudeDelta: 0.0121,
      }}
      showsUserLocation
    >
      <MapView.Marker
        coordinate={{ latitude: 52.5004, longitude: 13.3558 }}
        title="current location"
        description="hiya"
      />
    </MapView>
  );
};

const styles = StyleSheet.create({
  map: { height },
});

export default Map;
