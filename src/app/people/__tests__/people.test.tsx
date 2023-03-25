import { render, screen, waitForElementToBeRemoved, within } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';

import { charactersMessages, peopleMessages } from '../../messages';
import { charactersMockData, characterWithEmptyPlanet } from '../../mocks/characters-mock';
import { People } from '../people';
import { PeopleState } from '../../types';

const mockedStore = configureStore();

const setup = (people: PeopleState) =>
  render(
    <Provider
      store={mockedStore({
        people: { ...people }
      })}
    >
      <People />
    </Provider>
  );

describe('People', () => {
  it('should render component without crashing', async () => {
    setup({
      fetching: false,
      characters: charactersMockData,
      count: 0
    });

    expect(screen.getByText(peopleMessages.title)).toBeVisible();
  });

  it('should render loading text and table when list is loading even with characters data in store', async () => {
    setup({
      fetching: true,
      characters: charactersMockData,
      count: 0
    });

    expect(screen.getByTestId('loader')).toBeVisible();
    expect(screen.queryByTestId('characters-list-test-id')).toBeVisible();
  });

  it('should render loading text and table when list is loading even with last errors in the store', async () => {
    setup({
      fetching: true,
      characters: [],
      count: 0,
      error: 'Error'
    });

    expect(screen.getByTestId('loader')).toBeVisible();
    expect(screen.queryByTestId('characters-list-test-id')).toBeVisible();
  });

  it('should render data table and hide loader when list has data and is not loading', async () => {
    setup({
      fetching: false,
      characters: charactersMockData,
      count: 0
    });

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

  it('should render planet details of a character when user clicks on their planet name', async () => {
    setup({ fetching: false, characters: charactersMockData, count: 80 });

    userEvent.click(screen.getByText(/Tatooine/i));

    const dialog = screen.getByRole('dialog', {
      name: /planet/i
    });
    const modalDetailTitle = within(dialog).getByText(/planet/i);
    expect(modalDetailTitle).toBeVisible();
  });

  it('should not render planet details of a character when user clicks to close the modal', async () => {
    setup({ fetching: false, characters: charactersMockData, count: 80 });

    userEvent.click(screen.getByText(/Tatooine/i));

    expect(
      within(
        screen.getByRole('dialog', {
          name: /planet/i
        })
      ).queryByText(/planet/i)
    ).toBeVisible();

    userEvent.click(
      screen.getByRole('button', {
        name: /close/i
      })
    );

    await waitForElementToBeRemoved(() =>
      screen.queryByRole('dialog', {
        name: /planet/i
      })
    );
  });

  it('should not render planet details modal of a character without planet info', async () => {
    setup({ fetching: false, characters: [characterWithEmptyPlanet], count: 80 });

    userEvent.click(screen.getByText(charactersMessages.noItemFound));

    expect(
      screen.queryByRole('dialog', {
        name: /planet/i
      })
    ).not.toBeInTheDocument();
  });
});
