import { all, put, takeLatest, call } from 'redux-saga/effects';

import { peopleMessages } from '../messages';
import { PeopleResponse } from '../types';
import { fetchPeople } from './../services/fetchPeople';
import { PeopleRequest, peopleFailed, peopleSuccess, REQUEST_PEOPLE } from './people.actions';

function* peopleUser({ page }: PeopleRequest) {
  try {
    const response: PeopleResponse = yield call(fetchPeople, page);
    yield put(peopleSuccess(response, page));
  } catch (error) {
    yield put(peopleFailed(peopleMessages.generalError));
  }
}

export default function* peopleSaga() {
  yield all([takeLatest(REQUEST_PEOPLE, peopleUser)]);
}
