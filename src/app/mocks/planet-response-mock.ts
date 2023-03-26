import { PlanetResponse } from '../types';

export const planetResponseMock1: PlanetResponse = {
  name: 'Tatooine',
  rotation_period: '23',
  orbital_period: '304',
  diameter: '10465',
  climate: 'arid',
  gravity: '1 standard',
  terrain: 'desert',
  surface_water: '1',
  population: '200000',
  residents: [
    'https://swapi.dev/api/people/1/',
    'https://swapi.dev/api/people/2/',
    'https://swapi.dev/api/people/4/',
    'https://swapi.dev/api/people/6/',
    'https://swapi.dev/api/people/7/',
    'https://swapi.dev/api/people/8/',
    'https://swapi.dev/api/people/9/',
    'https://swapi.dev/api/people/11/',
    'https://swapi.dev/api/people/43/',
    'https://swapi.dev/api/people/62/'
  ],
  films: [
    'https://swapi.dev/api/films/1/',
    'https://swapi.dev/api/films/3/',
    'https://swapi.dev/api/films/4/',
    'https://swapi.dev/api/films/5/',
    'https://swapi.dev/api/films/6/'
  ],
  created: '2014-12-09T13:50:49.641000Z',
  edited: '2014-12-20T20:58:18.411000Z',
  url: 'https://swapi.dev/api/planets/1/'
};

export const planetResponseMock8: PlanetResponse = {
  name: 'Naboo',
  rotation_period: '26',
  orbital_period: '312',
  diameter: '12120',
  climate: 'temperate',
  gravity: '1 standard',
  terrain: 'grassy hills, swamps, forests, mountains',
  surface_water: '12',
  population: '4500000000',
  residents: [
    'https://swapi.dev/api/people/3/',
    'https://swapi.dev/api/people/21/',
    'https://swapi.dev/api/people/35/',
    'https://swapi.dev/api/people/36/',
    'https://swapi.dev/api/people/37/',
    'https://swapi.dev/api/people/38/',
    'https://swapi.dev/api/people/39/',
    'https://swapi.dev/api/people/42/',
    'https://swapi.dev/api/people/60/',
    'https://swapi.dev/api/people/61/',
    'https://swapi.dev/api/people/66/'
  ],
  films: [
    'https://swapi.dev/api/films/3/',
    'https://swapi.dev/api/films/4/',
    'https://swapi.dev/api/films/5/',
    'https://swapi.dev/api/films/6/'
  ],
  created: '2014-12-10T11:52:31.066000Z',
  edited: '2014-12-20T20:58:18.430000Z',
  url: 'https://swapi.dev/api/planets/8/'
};

export const planetResponseMock2: PlanetResponse = {
  name: 'Alderaan',
  rotation_period: '24',
  orbital_period: '364',
  diameter: '12500',
  climate: 'temperate',
  gravity: '1 standard',
  terrain: 'grasslands, mountains',
  surface_water: '40',
  population: '2000000000',
  residents: [
    'https://swapi.dev/api/people/5/',
    'https://swapi.dev/api/people/68/',
    'https://swapi.dev/api/people/81/'
  ],
  films: ['https://swapi.dev/api/films/1/', 'https://swapi.dev/api/films/6/'],
  created: '2014-12-10T11:35:48.479000Z',
  edited: '2014-12-20T20:58:18.420000Z',
  url: 'https://swapi.dev/api/planets/2/'
};

export const planetResponseMock20: PlanetResponse = {
  name: 'Stewjon',
  rotation_period: 'unknown',
  orbital_period: 'unknown',
  diameter: '0',
  climate: 'temperate',
  gravity: '1 standard',
  terrain: 'grass',
  surface_water: 'unknown',
  population: 'unknown',
  residents: ['https://swapi.dev/api/people/10/'],
  films: [],
  created: '2014-12-10T16:16:26.566000Z',
  edited: '2014-12-20T20:58:18.452000Z',
  url: 'https://swapi.dev/api/planets/20/'
};
