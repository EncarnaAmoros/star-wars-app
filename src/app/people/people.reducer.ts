import {
  REQUEST_PEOPLE,
  FETCH_PEOPLE_SUCCESS,
  FETCH_PEOPLE_FAILED,
  PeopleAction
} from './people.actions';
import { PeopleState } from '../types';

export const initialPeopleState = {
  fetching: false,
  count: 0,
  characters: []
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
        count: action.peopleData?.count,
        previous: action.peopleData?.previous,
        next: action.peopleData?.next,
        characters: [...action.peopleData.characters]
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
