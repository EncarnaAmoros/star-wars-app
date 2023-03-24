import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { Search } from '..';
import userEvent from '@testing-library/user-event';

// To mock timeout functions like debounce
jest.useFakeTimers();

const onSearchMockFunction = jest.fn();

describe('Search', () => {
  it('should render the search component without crashing', async () => {
    render(<Search placeholder="Placeholder test" onSearch={onSearchMockFunction} />);

    expect(screen.getByTestId('search-component')).toBeVisible();
  });

  it('should render the search component with the placeholder', async () => {
    render(<Search placeholder="Placeholder test" onSearch={onSearchMockFunction} />);

    expect(screen.getByPlaceholderText(/Placeholder test/i)).toBeVisible();
  });

  it('should display text that user writes in search', async () => {
    render(<Search placeholder="Placeholder test" onSearch={onSearchMockFunction} />);

    const query = 'test search text';
    userEvent.type(screen.getByRole('textbox'), query);

    expect(screen.getByDisplayValue(query)).toBeVisible();
  });

  it('should call search function when user types on input', async () => {
    render(<Search placeholder="Placeholder test" onSearch={onSearchMockFunction} />);

    const query = 'test search text';
    fireEvent.change(screen.getByRole('textbox'), { target: { value: query } });

    jest.runAllTimers();

    expect(onSearchMockFunction).toHaveBeenNthCalledWith(1, query);
  });
});
