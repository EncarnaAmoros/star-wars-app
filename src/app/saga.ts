import { all } from 'redux-saga/effects';
import peopleSaga from './people/people.saga';

export function* mainSaga() {
  yield all([peopleSaga()]);
}
