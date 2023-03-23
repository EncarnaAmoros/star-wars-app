import { RootState } from './types';

export const selectors = {
  characters: (state: RootState) => state.people?.characters,
  fetchingPeople: (state: RootState) => state.people?.fetching,
  fetchPeopleError: (state: RootState) => state.people?.error,
  totalPeople: (state: RootState) => state.people?.count,
  next: (state: RootState) => state.people?.next,
  previous: (state: RootState) => state.people?.previous
};
