import { Character } from '../types';

export const REQUEST_PEOPLE = 'PEOPLE_REQUEST';
export const FETCH_PEOPLE_SUCCESS = 'PEOPLE_SUCCESS';
export const FETCH_PEOPLE_FAILED = 'PEOPLE_FAILED';

export interface PeopleRequest {
  type: typeof REQUEST_PEOPLE;
  urlData?: string;
  search?: string;
}

export interface PeopleSuccessData {
  characters: Character[];
  count: number;
  previous?: string;
  next?: string;
}

export interface PeopleSuccess {
  type: typeof FETCH_PEOPLE_SUCCESS;
  peopleData: PeopleSuccessData;
}

export interface PeopleFailed {
  type: typeof FETCH_PEOPLE_FAILED;
  error: string;
}

export const peopleRequest = (urlData?: string, search?: string): PeopleRequest => ({
  type: REQUEST_PEOPLE,
  urlData,
  search
});

export const peopleSuccess = (peopleData: PeopleSuccessData): PeopleSuccess => ({
  type: FETCH_PEOPLE_SUCCESS,
  peopleData
});

export const peopleFailed = (error: string): PeopleFailed => ({
  type: FETCH_PEOPLE_FAILED,
  error
});

export type PeopleAction = PeopleRequest | PeopleSuccess | PeopleFailed;
