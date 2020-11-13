import { useState, useEffect } from 'react';
import { ZOOPLA_KEY } from '@env';

const ApiService = () => {
  const [england, setEngland] = useState([]);
  const [wales, setWales] = useState([]);
  const [scotland, setScotland] = useState([]);
  const [northernIreland, setNorthernIreland] = useState([]);
  const [unitedKingdom, setUnitedKingdom] = useState([]);

  useEffect(() => {
    fetch(
      `http://api.zoopla.co.uk/api/v1/property_listings.json?area=england&api_key=${ZOOPLA_KEY}`,
    )
      .then((res) => res.json())
      .then((list) => setEngland(list));
  }, []);

  useEffect(() => {
    fetch(
      `http://api.zoopla.co.uk/api/v1/property_listings.json?area=wales&api_key=${ZOOPLA_KEY}`,
    )
      .then((res) => res.json())
      .then((list) => setWales(list));
  }, []);

  useEffect(() => {
    fetch(
      `http://api.zoopla.co.uk/api/v1/property_listings.json?area=scotland&api_key=${ZOOPLA_KEY}`,
    )
      .then((res) => res.json())
      .then((list) => setScotland(list));
  }, []);

  useEffect(() => {
    fetch(
      `http://api.zoopla.co.uk/api/v1/property_listings.json?area=northern ireland&api_key=${ZOOPLA_KEY}`,
    )
      .then((res) => res.json())
      .then((list) => setNorthernIreland(list));
  }, []);

  Promise.all([
    england.listing,
    scotland.listing,
    wales.listing,
    northernIreland.listing,
  ])
    .then((values) => setUnitedKingdom(values))
    .then(console.log(unitedKingdom));
};

export default ApiService;
