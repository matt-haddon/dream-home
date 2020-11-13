import React, { useState } from 'react';
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
import Switcher from '../components/Switcher';
import ApiService from '../ApiService';

const Form = () => {
  //form states
  const [minBudget, setMinBudget] = useState('0');
  const [maxBudget, setMaxBudget] = useState('5000000');
  const [homeTypeIndex, setHomeTypeIndex] = useState('0');
  const [bedrooms, setBedrooms] = useState([0, 10]);
  const [garden, setGarden] = useState(false);
  const [garage, setGarage] = useState(false);
  const [balcony, setBalcony] = useState(false);
  const [newbuild, setNewbuild] = useState(false);
  const [helptobuy, setHelptobuy] = useState(false);

  const homeArray = [
    { label: 'House', value: 0 },
    { label: 'Apartment', value: 1 },
  ];

  // api requests

  const handleSubmit = (e) => {
    e.preventDefault();
    const filterObj = {
      minBudget: minBudget,
      maxBudget: maxBudget,
      homeType: homeArray[homeTypeIndex].label,
      minBeds: bedrooms[0],
      maxBeds: bedrooms[1],
      garden: garden,
      garage: garage,
      balcony: balcony,
      newbuild: newbuild,
      helptobuy: helptobuy,
    };

    console.log(filterObj);
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
      <Radio
        radio_props={homeArray}
        radioIndex={homeTypeIndex}
        setRadioIndex={setHomeTypeIndex}
      />

      <Text>Number of Bedrooms</Text>
      <Slider
        multiSliderValue={bedrooms}
        setMultiSliderValue={setBedrooms}
        maximum={10}
        minimum={0}
      />
      <Text>Features</Text>
      <View style={{ flexDirection: 'row' }}>
        <View>
          <Switcher toggle={garden} setToggle={setGarden} title={'Garden'} />
          <Switcher toggle={garage} setToggle={setGarage} title={'Garage'} />
        </View>
        <View>
          <Switcher
            toggle={balcony}
            setToggle={setBalcony}
            title={'Balcony/Terrace'}
          />
          <Switcher
            toggle={newbuild}
            setToggle={setNewbuild}
            title={'New Build'}
          />
        </View>
      </View>
      <Text>Incentives</Text>
      <Switcher
        toggle={helptobuy}
        setToggle={setHelptobuy}
        title={'Help To Buy'}
      />
      {<Button title="FIND" onPress={handleSubmit} />}
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
