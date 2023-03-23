import { PeopleState } from '../types';

export const REQUEST_PEOPLE = 'PEOPLE_REQUEST';
export const FETCH_PEOPLE_SUCCESS = 'PEOPLE_SUCCESS';
export const FETCH_PEOPLE_FAILED = 'PEOPLE_FAILED';

export interface PeopleRequest {
  type: typeof REQUEST_PEOPLE;
  page: number;
}

export interface PeopleSuccess {
  type: typeof FETCH_PEOPLE_SUCCESS;
  people: Partial<PeopleState>;
}

export interface PeopleFailed {
  type: typeof FETCH_PEOPLE_FAILED;
  error: string;
}

export const peopleRequest = (page: number): PeopleRequest => ({
  type: REQUEST_PEOPLE,
  page
});

export const peopleSuccess = (people: Partial<PeopleState>): PeopleSuccess => ({
  type: FETCH_PEOPLE_SUCCESS,
  people
});

export const peopleFailed = (error: string): PeopleFailed => ({
  type: FETCH_PEOPLE_FAILED,
  error
});

export type PeopleAction = PeopleRequest | PeopleSuccess | PeopleFailed;
