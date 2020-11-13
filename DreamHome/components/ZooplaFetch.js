import { ZOOPLA_KEY } from '@env';

const ZooplaFetch = (a, b, filterObj) => {
  let BASE_URL = `http://api.zoopla.co.uk/api/v1/property_listings.json?area=${a}&listing_status=sale`;
  let apiKey = `&api_key=${ZOOPLA_KEY}`;
  let budget = `&minimum_price=${filterObj.minBudget}&maximum_price=${filterObj.minBudget}`;
  let propertyType = `&property_type=${filterObj.propertyType}`;
  let bedrooms = `&minimum_beds=${filterObj.minBeds}&maximum_beds=${filterObj.maxBeds}`;
  let keywords = `&keywords=${filterObj.garden}&${filterObj.garage}&${filterObj.balcony}&${filterObj.helptobuy}`;
  let newHome = `&new_homes=${filterObj.newHome}`;

  let URL =
    BASE_URL + apiKey + budget + propertyType + bedrooms + keywords + newHome;

  fetch(URL)
    .then((res) => res.json())
    .then((list) => b(list));
};

export default ZooplaFetch;
