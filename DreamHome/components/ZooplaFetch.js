import { ZOOPLA_KEY } from '@env';

const ZooplaFetch = async (filterObj, country) => {
  let BASE_URL = `http://api.zoopla.co.uk/api/v1/property_listings.json?area=${country}&listing_status=sale`;
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

  try {
    const res = await fetch(URL);
    const json = await res.json();
    return json.listing;
  } catch (error) {
    console.log(error);
  }
};

export default ZooplaFetch;
