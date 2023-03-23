import { Character, CharacterResponse } from '../types';

export const getCharactersCustomData: (chatacters: CharacterResponse[]) => Character[] = (
  characters: CharacterResponse[]
) => {
  return characters.map((character) => ({
    name: character.name,
    height: character.height,
    mass: character.mass,
    created: new Date(character.created).toDateString(),
    edited: new Date(character.edited).toDateString(),
    homeworld: { name: 'Planet', url: character.homeworld }
  }));
};
