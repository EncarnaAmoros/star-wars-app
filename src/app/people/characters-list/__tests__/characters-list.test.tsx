import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { CharactersList } from '../characters-list';
import { charactersMessages } from '../../../messages';
import { charactersMockData } from '../characters-mock';

describe('CharactersList', () => {
  it('should render data table when list has data and not render no data text', async () => {
    render(<CharactersList characters={charactersMockData} />);

    expect(screen.getByTestId('characters-table-test-id')).toBeVisible();
    expect(screen.queryByText(charactersMessages.noDataFound)).not.toBeInTheDocument();
  });

  it('should not render data table when list is empty and render no data text', async () => {
    render(<CharactersList characters={[]} />);

    expect(screen.queryByTestId('characters-table-test-id')).not.toBeInTheDocument();
    expect(screen.getByText(charactersMessages.noDataFound)).toBeVisible();
  });
});
