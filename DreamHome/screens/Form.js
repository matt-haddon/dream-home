import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import Slider from '../components/Slider';
import Radio from '../components/Radio';
import Switcher from '../components/Switcher';
import ZooplaFetch from '../components/ZooplaFetch';
import { Item, Input, Label, Button } from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

// import MapScreen from './MapScreen';

const Form = ({ navigation }) => {
  //form states
  const [minBudget, setMinBudget] = useState('');
  const [maxBudget, setMaxBudget] = useState('');
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
  const [unitedKingdom, setUnitedKingdom] = useState('');

  useEffect(() => {
    if (unitedKingdom.length) {
      // console.log(unitedKingdom[0]);
      navigation.navigate('MapScreen', { data: unitedKingdom });
    }
  }, [unitedKingdom, navigation]);

  const handleSubmit = async (e) => {
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
      newHomes: newbuild ? 'true' : '',
      helptobuy: helptobuy ? 'helptobuy' : '',
    };
    // console.log(filterObj);

    // console.log(filterObj);
    const res = await ZooplaFetch(filterObj);
    setUnitedKingdom(res);

    // let scotFetch = ZooplaFetch(filterObj, scotland, setScotland);
    // let walesFetch = ZooplaFetch(filterObj, wales, setWales);
    // let niFetch = ZooplaFetch(filterObj, northernIreland, setNorthernIreland);
    // let value = [];

    // Promise.all([engFetch, scotFetch, walesFetch, niFetch])
    //   .then(
    //     value.concat(
    //       england.listing,
    //       wales.listing,
    //       scotland.listing,
    //       northernIreland.listing,
    //     ),
    //   )
    //   .then(setUnitedKingdom(value))
    //   .then(console.log(unitedKingdom))
    //   .then(console.log('hiya'));
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.headerText}>
          <Ionicons
            name={'ios-home'}
            size={30}
            color={'#F9C700'}
            style={{ width: 32 }}
          />{' '}
          My DreamHome
        </Text>
        <Text style={styles.titleText}>
          <Ionicons
            name={'ios-cash'}
            size={15}
            color={'#6A9AB6'}
            style={{ width: 32 }}
          />{' '}
          Budget
        </Text>
        <Item floatingLabel>
          <Label style={{ fontFamily: 'Quicksand_Regular' }}>
            Minimum Budget
          </Label>
          <Input
            style={{ fontFamily: 'Quicksand_Regular' }}
            keyboardType="number-pad"
            onChangeText={(value) => {
              Number(value);
              setMinBudget(value);
            }}
            value={minBudget}
            placeholderTextColor="gray"
          />
        </Item>
        <Item style={{ marginTop: 20 }} floatingLabel>
          <Label style={{ fontFamily: 'Quicksand_Regular' }}>
            Maximum Budget
          </Label>
          <Input
            style={{ fontFamily: 'Quicksand_Regular' }}
            keyboardType="number-pad"
            onChangeText={(value) => {
              Number(value);
              setMaxBudget(value);
            }}
            value={maxBudget}
            placeholderTextColor="gray"
          />
        </Item>

        <Text style={styles.titleText}>
          <Ionicons
            name={'ios-business'}
            size={15}
            color={'#6A9AB6'}
            style={{ width: 32 }}
          />{' '}
          Type
        </Text>

        <Radio
          radio_props={homeArray}
          radioIndex={homeTypeIndex}
          setRadioIndex={setHomeTypeIndex}
        />

        <Text style={styles.titleText}>
          <Ionicons
            name={'ios-bed'}
            size={15}
            color={'#6A9AB6'}
            style={{ width: 32 }}
          />{' '}
          Number of Bedrooms
        </Text>
        <Slider
          multiSliderValue={bedrooms}
          setMultiSliderValue={setBedrooms}
          maximum={10}
          minimum={0}
        />
        <Text style={styles.titleText}>
          <Ionicons
            name={'ios-car'}
            size={15}
            color={'#6A9AB6'}
            style={{ width: 32 }}
          />{' '}
          Features
        </Text>
        <View style={{ flexDirection: 'row' }}>
          <View>
            <Switcher toggle={garden} setToggle={setGarden} title={'Garden'} />
            <Switcher toggle={garage} setToggle={setGarage} title={'Garage'} />
          </View>
          <View style={{ marginHorizontal: 50 }}>
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
        <Text style={styles.titleText}>
          <Ionicons
            name={'ios-gift'}
            size={15}
            color={'#6A9AB6'}
            style={{ width: 32 }}
          />{' '}
          Incentives
        </Text>
        <Switcher
          toggle={helptobuy}
          setToggle={setHelptobuy}
          title={'Help To Buy'}
        />
        <Button style={styles.button} light onPress={handleSubmit}>
          <Text style={{ fontFamily: 'Quicksand_Bold' }}>
            <Ionicons
              name={'ios-search'}
              size={15}
              color={'#000'}
              style={{ width: 32 }}
            />
            {'  '}
            Search
          </Text>
        </Button>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    paddingTop: 80,
    paddingHorizontal: 30,
    fontFamily: 'Quicksand_700Bold',

    backgroundColor: 'white',

    flex: 1,
  },
  textInput: {
    marginLeft: 10,
    paddingHorizontal: 10,
    height: 30,
    width: 100,
  },
  headerText: {
    fontFamily: 'Quicksand_Bold',
    fontSize: 30,
    color: '#F9C700',
  },
  titleText: {
    fontFamily: 'Quicksand_BoldItalic',
    fontSize: 18,
    marginBottom: 20,
    marginTop: 30,
    color: '#6A9AB6',
  },
  text: {
    fontFamily: 'Quicksand_Regular',
    fontSize: 12,
  },

  button: {
    marginVertical: 20,
    backgroundColor: '#F9C700',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Form;
