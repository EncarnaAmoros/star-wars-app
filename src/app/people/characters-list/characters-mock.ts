import { Character } from '../../types';

export const charactersMockData: Character[] = [
  {
    name: 'Luke Skywalker',
    height: '172',
    mass: '77',
    homeworld: { name: 'Tatooine', url: 'https://swapi.dev/api/planets/1/' },
    created: 'Tue Dec 09 2014',
    edited: 'Sat Dec 20 2014'
  },
  {
    name: 'C-3PO',
    height: '167',
    mass: '75',
    homeworld: { name: 'Tatooine', url: 'https://swapi.dev/api/planets/1/' },
    created: 'Sat Dec 09 2013',
    edited: 'Sat Dec 20 2012'
  },
  {
    name: 'R2-D2',
    height: '96',
    mass: '32',
    homeworld: { name: 'Naboo', url: 'https://swapi.dev/api/planets/8/' },
    created: 'Tue Dec 09 2004',
    edited: 'Sat Dec 20 2019'
  }
];
