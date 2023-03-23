import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { CharactersList } from '../characters-list';
import { charactersMessages } from '../../../messages';
import { charactersMockData } from '../characters-mock';
import { Character } from '../../../types';
import userEvent from '@testing-library/user-event';

const onLoadMoreCharacters = jest.fn();

describe('CharactersList', () => {
  const setUp = (characters: Character[], page = 0, totalCharacters = 10) =>
    render(
      <CharactersList
        characters={characters}
        page={page}
        totalCharacters={totalCharacters}
        onLoadMoreCharacters={onLoadMoreCharacters}
      />
    );

  it('should render data table when list has data and not render no data text', async () => {
    setUp(charactersMockData);

    expect(screen.getByTestId('characters-table-test-id')).toBeVisible();
    expect(screen.queryByText(charactersMessages.noDataFound)).not.toBeInTheDocument();
  });

  it('should not render data table when list is empty and render no data text', async () => {
    setUp([]);

    expect(screen.queryByTestId('characters-table-test-id')).not.toBeInTheDocument();
    expect(screen.getByText(charactersMessages.noDataFound)).toBeVisible();
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
});
