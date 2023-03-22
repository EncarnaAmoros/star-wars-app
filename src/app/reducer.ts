import { combineReducers } from 'redux';
import { peopleReducer } from './people/people.reducer';

export const mainReducer = combineReducers({
  people: peopleReducer
});
