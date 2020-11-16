import React from 'react';
import { View, Switch, Text } from 'react-native';

const Switcher = (props) => {
  return (
    <View style={{ flexDirection: 'row' }}>
      <Switch
        trackColor={{ false: 'gray', true: '#F9C700' }}
        thumbColor="white"
        onValueChange={(value) => props.setToggle(value)}
        value={props.toggle}
      />
      <Text
        style={{
          fontFamily: 'Quicksand_Regular',
          paddingTop: 5,
          marginLeft: 5,
        }}
      >
        {props.title}
      </Text>
    </View>
  );
};

export default Switcher;
