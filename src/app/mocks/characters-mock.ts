import { Character, CharacterResponse } from '../types';

export const charactersMockData: Character[] = [
  {
    name: 'Luke Skywalker',
    height: '172',
    mass: '77',
    homeworld: {
      name: 'Tatooine',
      diameter: '12120',
      climate: 'temperate',
      population: '4500000000',
      url: 'https://swapi.dev/api/planets/1/'
    },
    created: 'Tue Dec 09 2014',
    edited: 'Sat Dec 20 2014'
  },
  {
    name: 'C-3PO',
    height: '167',
    mass: '75',
    homeworld: {
      name: 'Alderaan',
      diameter: '12500',
      climate: 'temperate',
      population: '2000000000',
      url: 'https://swapi.dev/api/planets/1/'
    },
    created: 'Sat Dec 09 2013',
    edited: 'Sat Dec 20 2012'
  },
  {
    name: 'R2-D2',
    height: '96',
    mass: '32',
    homeworld: {
      name: 'Yavin IV',
      diameter: '10465',
      climate: 'arid',
      population: '200000',
      url: 'https://swapi.dev/api/planets/8/'
    },
    created: 'Tue Dec 09 2004',
    edited: 'Sat Dec 20 2019'
  }
];

export const characterWithEmptyPlanet: Character = {
  name: 'Luke Skywalker',
  height: '167',
  mass: '75',
  homeworld: undefined,
  created: 'Sat Dec 09 2013',
  edited: 'Sat Dec 20 2012'
};

export const characterResponseWithoutPlanet: CharacterResponse = {
  name: 'Luke Skywalker',
  height: '172',
  mass: '77',
  hair_color: 'blond',
  skin_color: 'fair',
  eye_color: 'blue',
  birth_year: '19BBY',
  gender: 'male',
  homeworld: 'https://swapi.dev/api/planets/1/',
  films: [
    'https://swapi.dev/api/films/1/',
    'https://swapi.dev/api/films/2/',
    'https://swapi.dev/api/films/3/',
    'https://swapi.dev/api/films/6/'
  ],
  species: [],
  vehicles: ['https://swapi.dev/api/vehicles/14/', 'https://swapi.dev/api/vehicles/30/'],
  starships: ['https://swapi.dev/api/starships/12/', 'https://swapi.dev/api/starships/22/'],
  created: '2014-12-09T13:50:51.644000Z',
  edited: '2014-12-20T21:17:56.891000Z',
  url: 'https://swapi.dev/api/people/1/'
};

export const characterResponseWithPlanet: CharacterResponse = {
  name: 'Luke Skywalker',
  height: '172',
  mass: '77',
  hair_color: 'blond',
  skin_color: 'fair',
  eye_color: 'blue',
  birth_year: '19BBY',
  gender: 'male',
  homeworld: 'https://swapi.dev/api/planets/1/',
  planet: {
    name: 'Yavin IV',
    diameter: '10465',
    climate: 'arid',
    population: '200000',
    url: 'https://swapi.dev/api/planets/8/'
  },
  films: [
    'https://swapi.dev/api/films/1/',
    'https://swapi.dev/api/films/2/',
    'https://swapi.dev/api/films/3/',
    'https://swapi.dev/api/films/6/'
  ],
  species: [],
  vehicles: ['https://swapi.dev/api/vehicles/14/', 'https://swapi.dev/api/vehicles/30/'],
  starships: ['https://swapi.dev/api/starships/12/', 'https://swapi.dev/api/starships/22/'],
  created: '2014-12-09T13:50:51.644000Z',
  edited: '2014-12-20T21:17:56.891000Z',
  url: 'https://swapi.dev/api/people/1/'
};
