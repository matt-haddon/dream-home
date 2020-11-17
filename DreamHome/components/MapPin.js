import React from 'react';
import MapView from 'react-native-maps';

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
    />
  );
};

export default MapPin;
