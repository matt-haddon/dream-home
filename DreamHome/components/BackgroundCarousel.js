import React, { useEffect, useState } from 'react';
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

const BackgroundCarousel = ({ images }) => {
  let scrollRef = React.createRef();
  const [selectedIndex, setSelectedIndex] = useState(0);

  // const indexSelection = (event) => {
  //   const viewSize = event.nativeEvent.layoutMeasurement.width;
  //   const contentOffset = event.nativeEvent.contentOffset.x;

  //   const index = Math.floor(contentOffset / viewSize);
  //   setSelectedIndex({ index });
  // };

  // useEffect(() => {
  //   setInterval(
  //     () => {
  //       setSelectedIndex((prev) => ({
  //         selectedIndex:
  //           prev.selectedIndex === images.length - 1
  //             ? 0
  //             : prev.selectedIndex + 1,
  //       }));
  //     },
  //     () => {
  //       scrollRef.current.scrollTo({
  //         animated: true,
  //         y: 0,
  //         x: DEVICE_WIDTH * selectedIndex,
  //       });
  //     },
  //     3000,
  //   );
  // }, []);

  return (
    <View style={{ height: '100%', width: '100%' }}>
      <ScrollView
        horizontal
        pagingEnabled
        // onMomentumScrollEnd={indexSelection}
        // ref={scrollRef}
      >
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
