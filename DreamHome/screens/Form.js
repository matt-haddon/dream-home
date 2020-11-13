import React, { useState, useEffect, useCallback } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  Switch,
  TextInput,
} from 'react-native';
import Slider from '../components/Slider';
import Radio from '../components/Radio';
import ApiService from '../ApiService';

const Form = () => {
  //form states
  const [gardenToggle, setGardenToggle] = useState(false);
  const [garageToggle, setGarageToggle] = useState(false);
  const [balconyToggle, setBalconyToggle] = useState(false);
  const [newbuildToggle, setNewbuildToggle] = useState(false);
  const [helptobuyToggle, setHelptobuyToggle] = useState(false);
  const [minBudget, setMinBudget] = useState('0');
  const [maxBudget, setMaxBudget] = useState('5000000');

  const homeArray = [
    { label: 'House', value: 0 },
    { label: 'Apartment', value: 1 },
  ];

  // api requests

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <View style={styles.container}>
      <Text>My DreamHome</Text>
      <Text>Budget</Text>
      <View style={{ flexDirection: 'row', marginTop: 5, marginBottom: 5 }}>
        <Text>Min</Text>

        <TextInput
          style={styles.textInput}
          keyboardType="number-pad"
          onChangeText={(value) => {
            Number(value);
            setMinBudget(value);
          }}
          value={minBudget}
          placeholderTextColor="gray"
        />
      </View>
      <View style={{ flexDirection: 'row', marginBottom: 5 }}>
        <Text>Max</Text>
        <TextInput
          style={styles.textInput}
          placeholderTextColor="gray"
          keyboardType="number-pad"
          onChangeText={(value) => {
            Number(value);
            setMaxBudget(value);
          }}
          value={maxBudget}
        />
      </View>

      <Text>Type</Text>
      <Radio radio_props={homeArray} />

      <Text>Number of Bedrooms</Text>
      <Slider maximum={10} minimum={0} />
      <Text>Features</Text>
      <View style={{ flexDirection: 'row' }}>
        <View>
          <View style={{ flexDirection: 'row' }}>
            <Text>Garden</Text>
            <Switch
              trackColor={{ false: 'gray', true: 'teal' }}
              thumbColor="white"
              onValueChange={(value) => setGardenToggle(value)}
              value={gardenToggle}
            />
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Text>Garage</Text>
            <Switch
              trackColor={{ false: 'gray', true: 'teal' }}
              thumbColor="white"
              onValueChange={(value) => setGarageToggle(value)}
              value={garageToggle}
            />
          </View>
        </View>
        <View>
          <View style={{ flexDirection: 'row' }}>
            <Text>Balcony/Terrace</Text>
            <Switch
              trackColor={{ false: 'gray', true: 'teal' }}
              thumbColor="white"
              onValueChange={(value) => setBalconyToggle(value)}
              value={balconyToggle}
            />
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Text>New Build</Text>
            <Switch
              trackColor={{ false: 'gray', true: 'teal' }}
              thumbColor="white"
              onValueChange={(value) => setNewbuildToggle(value)}
              value={newbuildToggle}
            />
          </View>
        </View>
      </View>
      <Text>Incentives</Text>
      <View style={{ flexDirection: 'row' }}>
        <Text>Help To Buy</Text>
        <Switch
          trackColor={{ false: 'gray', true: 'teal' }}
          thumbColor="white"
          onValueChange={(value) => setHelptobuyToggle(value)}
          value={helptobuyToggle}
        />
      </View>
      {<Button title="FIND" />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    justifyContent: 'center',
    marginHorizontal: 10,
    marginTop: 80,
    backgroundColor: 'white',
  },
  textInput: {
    marginLeft: 10,
    paddingHorizontal: 10,
    height: 30,
    width: 100,
    borderColor: 'gray',
    borderWidth: 1,
  },
});

export default Form;
