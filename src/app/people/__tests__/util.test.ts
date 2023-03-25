import '@testing-library/jest-dom/extend-expect';
import {
  characterResponseWithoutPlanet,
  characterResponseWithPlanet
} from '../../mocks/characters-mock';
import { planetResponseMockData } from '../../mocks/planet-mock';
import { getCharactersCustomData, getCharacterWithPlanetData } from '../utils';

describe('People utils', () => {
  it('Should return the character data withing its planet data', async () => {
    const characterResponseWithPlanet = getCharacterWithPlanetData(
      characterResponseWithoutPlanet,
      planetResponseMockData
    );

    expect(characterResponseWithPlanet.name).toBe(characterResponseWithoutPlanet.name);
    expect(characterResponseWithPlanet.planet?.name).toBe(planetResponseMockData.name);
    expect(characterResponseWithPlanet.planet?.diameter).toBe(planetResponseMockData.diameter);
    expect(characterResponseWithPlanet.planet?.climate).toBe(planetResponseMockData.climate);
    expect(characterResponseWithPlanet.planet?.population).toBe(planetResponseMockData.population);
  });

  it('Should return the character custom data from character response', async () => {
    const characterCustomData = getCharactersCustomData([characterResponseWithPlanet]);

    expect(characterCustomData[0].name).toBe(characterResponseWithPlanet.name);

    expect(characterCustomData[0].created).toBe('Tue Dec 09 2014');
    expect(characterCustomData[0].edited).toBe('Sat Dec 20 2014');

    expect(characterCustomData[0].homeworld?.name).toBe(characterResponseWithPlanet.planet?.name);
    expect(characterCustomData[0].homeworld?.diameter).toBe(
      characterResponseWithPlanet.planet?.diameter
    );
    expect(characterCustomData[0].homeworld?.climate).toBe(
      characterResponseWithPlanet.planet?.climate
    );
    expect(characterCustomData[0].homeworld?.population).toBe(
      characterResponseWithPlanet.planet?.population
    );
  });
});
