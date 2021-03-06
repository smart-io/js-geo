import storage from '../Storage';

class CountryLoader {
  static storage = '/../../storage';
  static allCountriesFile = 'countries/countries.json';
  static countryFile = 'countries/countries/%s.json';
  static countryPolygonFile = 'countries/countries/%s/polygon.json';

  static loadAllCountries() {
    const file = CountryLoader.allCountriesFile;
    const filepath = '.' + CountryLoader.storage + '/' + file;

    if (storage && storage[file]) {
      return storage[file];
    }
    try {
      return require(filepath);
    } catch (err) {
      return null;
    }
  }

  static loadCountry(country) {
    country = country.toUpperCase();
    const file = CountryLoader.countryFile.replace('%s', country);
    const filepath = '.' + CountryLoader.storage + '/' + file;

    if (storage && storage[file]) {
      return storage[file];
    }
    try {
      return require(filepath);
    } catch (err) {
      return null;
    }
  }
}

export default CountryLoader;
