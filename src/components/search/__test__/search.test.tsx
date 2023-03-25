import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';

import { Search } from '..';
import { SearchProps } from '../search';

// To mock timeout functions like debounce
jest.useFakeTimers();

const onSearchMockFunction = jest.fn();

describe('Search', () => {
  const setUp = ({ placeholder, loadingSearch, onSearch }: SearchProps) =>
    render(<Search placeholder={placeholder} loadingSearch={loadingSearch} onSearch={onSearch} />);

  it('should render the search component without crashing', async () => {
    setUp({
      placeholder: 'Placeholder test',
      loadingSearch: false,
      onSearch: onSearchMockFunction
    });

    expect(screen.getByTestId('search-component')).toBeVisible();
  });

  it('should render the search component with the placeholder', async () => {
    setUp({
      placeholder: 'Placeholder test',
      loadingSearch: false,
      onSearch: onSearchMockFunction
    });

    expect(screen.getByPlaceholderText(/Placeholder test/i)).toBeVisible();
  });

  it('should display text that user writes in search', async () => {
    setUp({
      placeholder: 'Placeholder test',
      loadingSearch: false,
      onSearch: onSearchMockFunction
    });

    const query = 'test search text';
    userEvent.type(screen.getByRole('textbox'), query);

    expect(screen.getByDisplayValue(query)).toBeVisible();
  });

  it('should call search function when user types on input', async () => {
    setUp({
      placeholder: 'Placeholder test',
      loadingSearch: false,
      onSearch: onSearchMockFunction
    });

    const query = 'test search text';
    fireEvent.change(screen.getByRole('textbox'), {
      target: { value: query }
    });

    jest.runAllTimers();

    expect(onSearchMockFunction).toHaveBeenNthCalledWith(1, query);
  });
});
