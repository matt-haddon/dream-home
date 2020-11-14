import { ZOOPLA_KEY } from '@env';

const ZooplaFetch = async (filterObj, country, setCountry) => {
  let BASE_URL =
    'http://api.zoopla.co.uk/api/v1/property_listings.json?area=england&listing_status=sale';
  let apiKey = `&api_key=${ZOOPLA_KEY}`;
  let budget = `&minimum_price=${filterObj.minBudget}&maximum_price=${filterObj.maxBudget}`;
  let propertyType = `&property_type=${filterObj.propertyType}`;
  let bedrooms = `&minimum_beds=${filterObj.minBeds}&maximum_beds=${filterObj.maxBeds}`;
  let keywords = `${
    !filterObj.garden &&
    !filterObj.garage &&
    !filterObj.balcony &&
    !filterObj.helptobuy
      ? ''
      : '&keywords='
  }${filterObj.garden}${filterObj.garden ? '&' : ''}${filterObj.garage}${
    filterObj.garage ? '&' : ''
  }${filterObj.balcony}${filterObj.balcony ? '&' : ''}${filterObj.helptobuy}`;
  let newHome = `${filterObj.newHomes ? '&new_homes=' : ''}${
    filterObj.newHomes
  }`;

  let URL =
    BASE_URL + budget + propertyType + bedrooms + keywords + newHome + apiKey;

  console.log(URL);

  try {
    fetch(URL).then((res) => {
      res.json().then((result) => console.log(result.listing[0]));
    });
  } catch (error) {
    console.log(error);
  }
};

export default ZooplaFetch;
