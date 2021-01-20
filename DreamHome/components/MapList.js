import React from 'react';
import MapPin from './MapPin';

const MapList = ({ data }) => {
  return (
    <>
      {data[0].map((town) => (
        <MapPin town={town} key={town.lat} />
      ))}
    </>
  );
};

export default MapList;
