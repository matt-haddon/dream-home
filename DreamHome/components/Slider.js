import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MultiSlider from '@ptomasroos/react-native-multi-slider';

const Slider = (props) => {
  const [multiSliderValue, setMultiSliderValue] = useState([
    props.minimum,
    props.maximum,
  ]);

  const multiSliderValuesChange = (values) => setMultiSliderValue(values);

  return (
    <View style={styles.ViewContainer}>
      <View style={styles.LabelWrapper}>
        <Text style={styles.LabelText}>{multiSliderValue[0]} </Text>
        <Text style={styles.LabelText}>{multiSliderValue[1]}</Text>
      </View>

      <MultiSlider
        markerStyle={styles.markerStyle}
        pressedMarkerStyle={styles.pressedMarkerStyle}
        selectedStyle={styles.selectedStyle}
        trackStyle={styles.trackStyle}
        values={[multiSliderValue[0], multiSliderValue[1]]}
        sliderLength={250}
        onValuesChange={multiSliderValuesChange}
        min={props.minimum}
        max={props.maximum}
        allowOverlap={false}
        minMarkerOverlapDistance={1}
        touchDimensions={{
          height: 40,
          width: 40,
          borderRadius: 20,
          slipDisplacement: 40,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  ViewContainer: {
    alignSelf: 'center',
    justifyContent: 'center',
  },
  LabelWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
  },
  Labeltext: {
    fontSize: 20,
  },
  markerStyle: {
    height: 30,
    width: 30,
    borderRadius: 50,
    backgroundColor: '#1792E8',
  },
  pressedMarkerStyle: {
    height: 30,
    width: 30,
    borderRadius: 20,
    backgroundColor: '#148ADC',
  },
  selectedStyle: {
    backgroundColor: '#1792E8',
  },
  trackStyle: {
    backgroundColor: '#CECECE',
  },
});

export default Slider;
