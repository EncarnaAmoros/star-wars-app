import { all, put, takeLatest, call } from 'redux-saga/effects';

import { peopleMessages } from '../messages';
import { PeopleResponse } from '../types';
import { fetchPeople } from './../services/fetchPeople';
import { PeopleRequest, peopleFailed, peopleSuccess, REQUEST_PEOPLE } from './people.actions';
import { getCharactersCustomData } from './utils';

function* peopleUser({ page }: PeopleRequest) {
  try {
    const response: PeopleResponse = yield call(fetchPeople, page);
    const people = {
      count: response.count,
      previous: response.previous,
      next: response.next,
      characters: response.results?.length > 0 ? getCharactersCustomData(response.results) : [],
      page: page
    };

    yield put(peopleSuccess(people));
  } catch (error) {
    yield put(peopleFailed(peopleMessages.generalError));
  }
}

export default function* peopleSaga() {
  yield all([takeLatest(REQUEST_PEOPLE, peopleUser)]);
}
