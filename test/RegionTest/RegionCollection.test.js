import chai, { expect } from 'chai';
import Region from '../../src/Region/Region';
import RegionRepository from '../../src/Region/RegionRepository';
import ArrayCollection from '../../src/ArrayCollection';

describe('RegionCollection', () => {
  it('order by region name', () => {
    const regions = RegionRepository.findAll();
    regions.orderByName('en');

    let previousName = null;
    for (var i = 0, len = regions.length; i < len; ++i) {
      let name = regions[i].get('names').get('en').get('name');
      if (!previousName) {
        previousName = ArrayCollection._removeAccents(name);
        continue;
      }
      expect(ArrayCollection._removeAccents(name)).to.be.greaterThan(previousName);
      previousName = ArrayCollection._removeAccents(name);
    }
  });
});
