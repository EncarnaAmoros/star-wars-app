import { Planet, PlanetResponse } from '../types';

export const planetMockData: Planet = {
  name: 'Tatooine',
  diameter: '12120',
  climate: 'temperate',
  population: '4500000000',
  url: 'https://swapi.dev/api/planets/1/'
};

export const planetResponseMockData: PlanetResponse = {
  name: 'Yavin IV',
  diameter: '10465',
  climate: 'arid',
  population: '200000',
  url: 'https://swapi.dev/api/planets/8/'
};
