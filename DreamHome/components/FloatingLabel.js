import React, { Component, View } from 'react';
import { Item, Input, Label } from 'native-base';

const FloatingLabel = () => {
  return (
    <View>
      <Item floatingLabel>
        <Label>Minimum Budget</Label>
        <Input />
      </Item>
      <Item floatingLabel last>
        <Label>Maximum Budget</Label>
        <Input />
      </Item>
    </View>
  );
};

export default FloatingLabel;
