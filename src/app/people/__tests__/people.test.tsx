import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import '@testing-library/jest-dom/extend-expect';

import { peopleMessages } from '../../messages';
import { charactersMockData } from './../characters-list/characters-mock';
import { People } from '../people';
import { PeopleState } from '../../types';

const mockedStore = configureStore();

const setup = (people: PeopleState) =>
  render(
    <Provider
      store={mockedStore({
        people: { ...people }
      })}>
      <People />
    </Provider>
  );

describe('People', () => {
  it('should render component without crashing', async () => {
    setup({ fetching: false, characters: charactersMockData, count: 0 });

    expect(screen.getByText(peopleMessages.title)).toBeVisible();
  });

  it('should render loading text and table when list is loading even with characters data in store', async () => {
    setup({ fetching: true, characters: charactersMockData, count: 0 });

    expect(screen.getByTestId('loader')).toBeVisible();
    expect(screen.queryByTestId('characters-list-test-id')).toBeVisible();
  });

  it('should render loading text and table when list is loading even with last errors in the store', async () => {
    setup({ fetching: true, characters: [], count: 0, error: 'Error' });

    expect(screen.getByTestId('loader')).toBeVisible();
    expect(screen.queryByTestId('characters-list-test-id')).toBeVisible();
  });

  it('should render data table and hide loader when list has data and is not loading', async () => {
    setup({ fetching: false, characters: charactersMockData, count: 0 });

    expect(screen.queryByTestId('loader')).not.toBeInTheDocument();
    expect(screen.getByTestId('characters-list-test-id')).toBeVisible();
  });

  it('should render data table and hide loader even when list is empty because is not loading', async () => {
    setup({ fetching: false, characters: [], count: 0 });

    expect(screen.queryByTestId('loader')).not.toBeInTheDocument();
    expect(screen.getByTestId('characters-list-test-id')).toBeVisible();
  });

  it('should render data table without data and notification error when there is an error fetching data', async () => {
    const error = 'Unexpected error';
    setup({ fetching: false, characters: [], count: 0, error });

    expect(screen.getByText(error)).toBeVisible();
    expect(screen.getByTestId('characters-list-test-id')).toBeVisible();
  });

  it('should not render loading when is not loading and there is an error fetching data', async () => {
    const error = 'Unexpected error';
    setup({ fetching: false, characters: [], count: 0, error });

    expect(screen.queryByTestId('loader')).not.toBeInTheDocument();
  });
});
