import { BASE_URL, INITIAL_PAGE } from './constants';
import { PeopleResponse } from '../types';

export const fetchPeople = async (
  urlData?: string,
  search?: string
): Promise<{ data: PeopleResponse }> =>
  fetch(
    urlData
      ? urlData
      : `${BASE_URL}/people?page=${INITIAL_PAGE}${search ? `&search=${search}` : ''}`,
    {
      method: 'get',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    }
  ).then((response) => response.json());
