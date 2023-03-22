import {
  REQUEST_PEOPLE,
  FETCH_PEOPLE_SUCCESS,
  FETCH_PEOPLE_FAILED,
  PeopleAction
} from './people.actions';
import { PeopleState } from '../types';

export const initialPeopleState = {
  fetching: false,
  page: 1,
  count: 0
};

export function peopleReducer(state: PeopleState = initialPeopleState, action: PeopleAction) {
  switch (action.type) {
    case REQUEST_PEOPLE:
      return {
        ...state,
        fetching: true,
        error: undefined
      };

    case FETCH_PEOPLE_SUCCESS:
      return {
        ...state,
        fetching: false,
        error: undefined,
        characters: action.people?.results,
        count: action.people?.count,
        next: action.people?.next,
        previous: action.people?.previous,
        page: action.page
      };

    case FETCH_PEOPLE_FAILED:
      return {
        ...state,
        fetching: false,
        error: action.error
      };

    default:
      return state;
  }
}
