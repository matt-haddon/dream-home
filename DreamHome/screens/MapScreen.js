import React from 'react';
import { SafeAreaView } from 'react-navigation';

import Map from '../components/Map';

const MapScreen = ({ navigation }) => {
  return (
    <SafeAreaView forceInset={{ top: 'always' }}>
      <Map data={navigation.state.params} />
    </SafeAreaView>
  );
};

export default MapScreen;
