import Model from '../Model';
import RegionNameCollection from './RegionName/RegionNameCollection';
import CountryRepository from '../Country/CountryRepository';

class Region extends Model {
  static model = {
    names: RegionNameCollection
  };

  country() {
    if (typeof this._country !== 'undefined') {
      return this._country;
    }
    return this._country = CountryRepository.findByShortCode(this.attributes.country);
  }
}

export default Region;
