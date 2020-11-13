import React from 'react';
import { View, Switch, Text } from 'react-native';

const Switcher = (props) => {
  return (
    <View style={{ flexDirection: 'row' }}>
      <Text>{props.title}</Text>
      <Switch
        trackColor={{ false: 'gray', true: 'teal' }}
        thumbColor="white"
        onValueChange={(value) => props.setToggle(value)}
        value={props.toggle}
      />
    </View>
  );
};

export default Switcher;
