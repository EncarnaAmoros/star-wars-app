import { all, put, takeLatest, call } from 'redux-saga/effects';

import { peopleMessages } from '../messages';
import { PeopleResponse } from '../types';
import { fetchPeople } from './../services/fetchPeople';
import {
  PeopleRequest,
  peopleFailed,
  peopleSuccess,
  REQUEST_PEOPLE,
  PeopleSuccessData
} from './people.actions';
import { getCharactersCustomData } from './utils';

function* peopleUser({ urlData, search }: PeopleRequest) {
  try {
    const response: PeopleResponse = yield call(fetchPeople, urlData, search);
    const people: PeopleSuccessData = {
      count: response.count,
      previous: response.previous,
      next: response.next,
      characters: response.results?.length > 0 ? getCharactersCustomData(response.results) : []
    };

    yield put(peopleSuccess(people));
  } catch (error) {
    yield put(peopleFailed(peopleMessages.generalError));
  }
}

export default function* peopleSaga() {
  yield all([takeLatest(REQUEST_PEOPLE, peopleUser)]);
}
