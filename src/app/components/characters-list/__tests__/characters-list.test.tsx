import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';

import { CharactersList } from '../characters-list';
import { charactersMessages } from '../../../messages';
import { charactersMockData, characterWithEmptyPlanet } from '../../../mocks/characters-mock';
import { Character } from '../../../types';

const onLoadMoreCharacters = jest.fn();
const onClickPlanetName = jest.fn();

describe('CharactersList', () => {
  const setUp = (characters: Character[], page = 0, totalCharacters = 10) =>
    render(
      <CharactersList
        characters={characters}
        page={page}
        totalCharacters={totalCharacters}
        onLoadMoreCharacters={onLoadMoreCharacters}
        onClickPlanetName={onClickPlanetName}
      />
    );

  it('should render data table when list has data and not render no data text', async () => {
    setUp(charactersMockData);

    expect(screen.getByTestId('characters-table-test-id')).toBeVisible();
    expect(screen.queryByText(charactersMessages.noDataFound)).not.toBeInTheDocument();
  });

  it('should render data table when list is empty and render no data text', async () => {
    setUp([]);

    expect(screen.getByTestId('characters-table-test-id')).toBeVisible();
    expect(screen.getByText(charactersMessages.noDataFound)).toBeVisible();
  });

  it('should render data table with data of characters and their planet', async () => {
    setUp(charactersMockData);

    expect(screen.getByText('Luke Skywalker')).toBeVisible();
    expect(screen.getByText('Tatooine')).toBeVisible();
    expect(screen.getByText('C-3PO')).toBeVisible();
    expect(screen.getByText('Alderaan')).toBeVisible();
    expect(screen.getByText('R2-D2')).toBeVisible();
    expect(screen.getByText('Yavin IV')).toBeVisible();
  });

  it('should render text not available when cell has no info', async () => {
    setUp([characterWithEmptyPlanet], 80, 82);

    expect(screen.getByText(charactersMessages.noItemFound)).toBeVisible();
  });

  it('should call on load more characters when pagination is clicked', async () => {
    setUp(charactersMockData, 1, 89);

    userEvent.click(
      screen.getByRole('button', {
        name: /next page/i
      })
    );
    expect(onLoadMoreCharacters).toHaveBeenCalled();
  });

  it('should not call on load more characters when in the first page calls to previous page', async () => {
    setUp(charactersMockData, 0, 82);

    userEvent.click(
      screen.getByRole('button', {
        name: /previous page/i
      })
    );
    expect(onLoadMoreCharacters).not.toHaveBeenCalled();
  });

  it('should not call on load more characters when is the last page and calls next page', async () => {
    setUp(charactersMockData, 80, 82);

    userEvent.click(
      screen.getByRole('button', {
        name: /next page/i
      })
    );
    expect(onLoadMoreCharacters).not.toHaveBeenCalled();
  });

  it('should not call on load more characters when is just one page', async () => {
    setUp(charactersMockData, 80, 82);

    userEvent.click(
      screen.getByRole('button', {
        name: /next page/i
      })
    );
    expect(onLoadMoreCharacters).not.toHaveBeenCalled();
  });

  it('should call on click planet name handle when click in a planet name', async () => {
    setUp(charactersMockData, 80, 82);

    userEvent.click(screen.getByText(/Tatooine/i));
    expect(onClickPlanetName).toHaveBeenCalled();
  });

  it('should not call on click planet name handle when click in cell that is not the planet name', async () => {
    setUp(charactersMockData, 80, 82);

    userEvent.click(screen.getByText(/Luke Skywalker/i));
    expect(onClickPlanetName).not.toHaveBeenCalled();
  });
});
