import { RootState } from './types';

export const selectors = {
  characters: (state: RootState) => state.people?.characters,
  page: (state: RootState) => state.people?.page,
  fetchingPeople: (state: RootState) => state.people?.fetching,
  fetchPeopleError: (state: RootState) => state.people?.error
};
