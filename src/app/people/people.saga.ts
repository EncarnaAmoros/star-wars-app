import { all, put, takeLatest, call } from 'redux-saga/effects';

import { peopleMessages } from '../messages';
import { CharacterResponse, PeopleResponse, PlanetResponse } from '../types';
import { fetchPeople } from './../services/fetchPeople';
import {
  PeopleRequest,
  peopleFailed,
  peopleSuccess,
  REQUEST_PEOPLE,
  PeopleSuccessData
} from './people.actions';
import { getCharactersCustomData, getCharacterWithPlanetData } from './utils';

const getPeopleWithPlanet = async (response: PeopleResponse) => {
  if (!response?.results || response?.results.length === 0) {
    return [];
  }

  const peopleWithPlanet: CharacterResponse[] = await Promise.all(
    response.results.map(async (people: CharacterResponse) => {
      const planet: PlanetResponse = await fetch(people.homeworld).then((data) => data.json());
      return getCharacterWithPlanetData(people, planet);
    })
  );
  return peopleWithPlanet;
};

function* peopleUser({ urlData, search }: PeopleRequest) {
  try {
    const people: PeopleResponse = yield call(fetchPeople, urlData, search);
    const charactersWithPlanet: CharacterResponse[] = yield call(getPeopleWithPlanet, people);

    const peopleWithPlanetInfo: PeopleSuccessData = {
      count: people.count,
      previous: people.previous,
      next: people.next,
      characters:
        charactersWithPlanet?.length > 0 ? getCharactersCustomData(charactersWithPlanet) : []
    };

    yield put(peopleSuccess(peopleWithPlanetInfo));
  } catch (error) {
    yield put(peopleFailed(peopleMessages.generalError));
  }
}

export default function* peopleSaga() {
  yield all([takeLatest(REQUEST_PEOPLE, peopleUser)]);
}
