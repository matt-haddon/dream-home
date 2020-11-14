import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, TextInput } from 'react-native';
import Slider from '../components/Slider';
import Radio from '../components/Radio';
import Switcher from '../components/Switcher';
import ZooplaFetch from '../components/ZooplaFetch';

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
    { label: 'House', value: 0, search: 'houses' },
    { label: 'Apartment', value: 1, search: 'flats' },
  ];
  //api request states

  const [england, setEngland] = useState([]);
  const [wales, setWales] = useState([]);
  const [scotland, setScotland] = useState([]);
  const [northernIreland, setNorthernIreland] = useState([]);
  const [unitedKingdom, setUnitedKingdom] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const filterObj = {
      minBudget: minBudget,
      maxBudget: maxBudget,
      propertyType: homeArray[homeTypeIndex].search,
      minBeds: bedrooms[0],
      maxBeds: bedrooms[1],
      garden: garden ? 'garden' : '',
      garage: garage ? 'garage' : '',
      balcony: balcony ? 'balcony' : '',
      newHomes: newbuild,
      helptobuy: helptobuy ? 'helptobuy' : '',
    };

    console.log(filterObj);
    let engFetch = ZooplaFetch(filterObj, england, setEngland);
    let scotFetch = ZooplaFetch(filterObj, scotland, setScotland);
    let walesFetch = ZooplaFetch(filterObj, wales, setWales);
    let niFetch = ZooplaFetch(filterObj, northernIreland, setNorthernIreland);
    let value = [];

    Promise.all([engFetch, scotFetch, walesFetch, niFetch])
      .then(
        value.concat(
          england.listing,
          wales.listing,
          scotland.listing,
          northernIreland.listing,
        ),
      )
      .then(setUnitedKingdom(value))
      .then(console.log(unitedKingdom))
      .then(console.log('hiya'));
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
