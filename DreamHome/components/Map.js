import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import MapView from 'react-native-maps';

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
