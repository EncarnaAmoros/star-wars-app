import { Character, CharacterResponse, PlanetResponse } from '../types';

export const getCharactersCustomData: (chatacters: CharacterResponse[]) => Character[] = (
  characters: CharacterResponse[]
) =>
  characters.map((character) => ({
    name: character.name,
    height: character.height,
    mass: character.mass,
    created: new Date(character.created).toDateString(),
    edited: new Date(character.edited).toDateString(),
    homeworld: character.planet
      ? {
          name: character.planet?.name,
          diameter: character.planet?.diameter,
          climate: character.planet?.climate,
          population: character.planet?.population,
          url: character.homeworld
        }
      : undefined
  }));

export const getCharacterWithPlanetData: (
  character: CharacterResponse,
  planet: PlanetResponse
) => CharacterResponse = (character, planet) => {
  return {
    ...character,
    planet: {
      ...character.planet,
      name: planet.name,
      diameter: planet.diameter,
      climate: planet.climate,
      population: planet.population
    }
  };
};
