import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Dimensions,
  ImageBackground,
  Text,
  Button,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const DEVICE_WIDTH = Dimensions.get('window').width;

const BackgroundCarousel = (props) => {
  let scrollRef = React.createRef();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const { images } = props;

  return (
    <View style={{ height: '100%', width: '100%' }}>
      <ScrollView horizontal pagingEnabled>
        {images.map((image) => (
          <ImageBackground
            key={image}
            source={{ uri: image }}
            style={styles.backgroundImage}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    width: DEVICE_WIDTH,
    opacity: 0.5,
    zIndex: 0,
    flex: 1,
  },
});

export default BackgroundCarousel;
