import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MultiSlider from '@ptomasroos/react-native-multi-slider';

const Slider = (props) => {
  const multiSliderValuesChange = (values) => props.setMultiSliderValue(values);

  return (
    <View style={styles.ViewContainer}>
      <View style={styles.LabelWrapper}>
        <Text style={styles.LabelText}>{props.multiSliderValue[0]} </Text>
        <Text style={styles.LabelText}>{props.multiSliderValue[1]}</Text>
      </View>

      <MultiSlider
        markerStyle={styles.markerStyle}
        pressedMarkerStyle={styles.pressedMarkerStyle}
        selectedStyle={styles.selectedStyle}
        trackStyle={styles.trackStyle}
        values={[props.multiSliderValue[0], props.multiSliderValue[1]]}
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
    paddingVertical: 5,
  },
  Labeltext: {
    fontSize: 20,
    fontFamily: 'Quicksand_Bold',
  },
  markerStyle: {
    height: 30,
    width: 30,
    borderRadius: 50,
    backgroundColor: '#6A9AB6',
  },
  pressedMarkerStyle: {
    height: 30,
    width: 30,
    borderRadius: 20,
    backgroundColor: '#F9C700',
  },
  selectedStyle: {
    backgroundColor: '#6A9AB6',
  },
  trackStyle: {
    backgroundColor: '#CECECE',
  },
});

export default Slider;
