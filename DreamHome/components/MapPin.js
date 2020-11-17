import React from 'react';
import { Image, Text, View } from 'react-native';
import MapView, { Callout } from 'react-native-maps';
import { Ionicons } from '@expo/vector-icons';

const MapPin = ({ town }) => {
  return (
    <MapView.Marker
      coordinate={{ latitude: town.lat, longitude: town.lng }}
      title={town.post_town}
      description={`Results${'\n'}
      No Properties: ${town.numOfProperties}${'\n'}
      Average Price: ${town.numOfProperties}${'\n'}
      Average Bedrooms: ${town.avBedrooms}
     `}
    >
      <Image
        source={require('../assets/icon.png')}
        style={{ width: 26, height: 28 }}
        resizeMode="contain"
      />
      <Callout style={{ width: 200, height: 100 }}>
        <View>
          <Text
            style={{
              fontFamily: 'Quicksand_Bold',
              fontSize: 20,
              marginBottom: 10,
            }}
          >
            {town.post_town}
          </Text>
          <Text style={{ fontFamily: 'Quicksand_Regular' }}>
            <Ionicons
              name={'ios-cash'}
              size={15}
              color={'#6A9AB6'}
              style={{ width: 32 }}
            />{' '}
            Average Price: {town.averagePrice}
          </Text>
          <Text style={{ fontFamily: 'Quicksand_Regular' }}>
            <Ionicons
              name={'ios-bed'}
              size={15}
              color={'#6A9AB6'}
              style={{ width: 32 }}
            />{' '}
            Average Bedrooms: {town.avBedrooms}
          </Text>
          <Text style={{ fontFamily: 'Quicksand_Regular' }}>
            <Ionicons
              name={'ios-stats'}
              size={15}
              color={'#6A9AB6'}
              style={{ width: 32 }}
            />{' '}
            No Properties: {town.numOfProperties}
          </Text>
        </View>
      </Callout>
    </MapView.Marker>
  );
};

export default MapPin;
