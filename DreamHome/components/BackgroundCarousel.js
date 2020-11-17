import React, { useEffect, useState, useRef } from 'react';
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
  const scrollRef = useRef();
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 3000);
  }, [images]);

  useEffect(() => {
    () => {
      scrollRef.current.scrollTo({
        animated: true,
        x: DEVICE_WIDTH * activeIndex,
        y: 0,
      });
    };
  }, [activeIndex]);

  return (
    <View style={{ height: '100%', width: '100%' }}>
      <ScrollView horizontal pagingEnabled ref={scrollRef}>
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
