import { BASE_URL, INITIAL_PAGE } from './constants';
import { PeopleResponse } from '../types';

export const fetchPeople = async (urlNext?: string): Promise<{ data: PeopleResponse }> =>
  fetch(urlNext ? urlNext : `${BASE_URL}/people?page=${INITIAL_PAGE}`, {
    method: 'get',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  }).then((response) => response.json());
