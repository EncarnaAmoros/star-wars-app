import { BASE_URL } from './constants';
import { PeopleResponse } from '../types';

export const fetchPeople = async (page: number): Promise<{ data: PeopleResponse }> =>
  fetch(`${BASE_URL}/people?page=${page}`, {
    method: 'get',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  }).then((response) => response.json());
