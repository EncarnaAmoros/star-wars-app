import {
  act,
  fireEvent,
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved
} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';
import { setupServer } from 'msw/node';
import { Provider } from 'react-redux';

import { charactersMessages, peopleMessages } from '../messages';
import { peopleHandlers } from '../mocks/people-api-mock';
import { planetHandlers } from '../mocks/planet-api-mock';
import {
  peopleResponse,
  peopleResponsePage2,
  peopleSearchLukeResponse
} from '../mocks/people-response-mock';
import {
  planetResponseMock1,
  planetResponseMock2,
  planetResponseMock20,
  planetResponseMock8
} from '../mocks/planet-response-mock';
import { People } from '../people';
import { store } from '../store';

// Mock API CALLs
const server = setupServer(...planetHandlers, ...peopleHandlers);

// To mock timeout functions like debounce
jest.useFakeTimers();

const setup = () =>
  render(
    <Provider store={store}>
      <People />
    </Provider>
  );

describe('People', () => {
  // INIT, RESET AND CLEAN API MOCKED CALLs
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  it('should render people page without crashing', async () => {
    setup();

    expect(screen.getByText(peopleMessages.title)).toBeVisible();
  });

  it('should render people page with all characters info', async () => {
    setup();

    await waitForElementToBeRemoved(() => screen.queryByTestId('loader'));
    expect(screen.getByText(peopleResponse.results[0].name)).toBeVisible();
    expect(screen.getByText(peopleResponse.results[1].name)).toBeVisible();
    expect(screen.getByText(peopleResponse.results[2].name)).toBeVisible();
    expect(screen.getByText(peopleResponse.results[3].name)).toBeVisible();
    expect(screen.getByText(peopleResponse.results[4].name)).toBeVisible();
    expect(screen.getByText(peopleResponse.results[5].name)).toBeVisible();
    expect(screen.getByText(peopleResponse.results[6].name)).toBeVisible();
    expect(screen.getByText(peopleResponse.results[7].name)).toBeVisible();
    expect(screen.getByText(peopleResponse.results[8].name)).toBeVisible();
    expect(screen.getByText(peopleResponse.results[9].name)).toBeVisible();
  });

  it('should render people page with all planets info', async () => {
    setup();

    await waitForElementToBeRemoved(() => screen.queryByTestId('loader'));
    expect(screen.getAllByText(planetResponseMock1.name)).toHaveLength(7);
    expect(screen.getAllByText(planetResponseMock2.name)).toHaveLength(1);
    expect(screen.getAllByText(planetResponseMock8.name)).toHaveLength(1);
    expect(screen.getAllByText(planetResponseMock20.name)).toHaveLength(1);
  });

  it('should render people page 2', async () => {
    setup();

    await waitForElementToBeRemoved(() => screen.queryByTestId('loader'));

    userEvent.click(
      screen.getByRole('button', {
        name: /next page/i
      })
    );
    jest.runAllTimers();

    await waitFor(() => screen.queryByTestId('loader'));
    await waitForElementToBeRemoved(() => screen.queryByTestId('loader'));

    expect(screen.getByText(peopleResponsePage2.results[0].name)).toBeVisible();
    expect(screen.getByText(peopleResponsePage2.results[1].name)).toBeVisible();
  });

  it('should search by people name and display the correct response', async () => {
    setup();

    await waitForElementToBeRemoved(() => screen.queryByTestId('loader'));

    act(() => {
      fireEvent.change(screen.getByRole('textbox'), {
        target: { value: 'Luke' }
      });
      jest.runAllTimers();
    });

    await waitFor(() => screen.queryByTestId('loader'));
    await waitForElementToBeRemoved(() => screen.queryByTestId('loader'));

    expect(screen.getByText(peopleSearchLukeResponse.results[0].name)).toBeVisible();
    expect(screen.getByText(/Tatooine/i)).toBeVisible();
    expect(screen.getByText(peopleSearchLukeResponse.results[1].name)).toBeVisible();
    expect(screen.getByText(/Alderaan/i)).toBeVisible();
  });

  it('should search by people name that it will not found and display no results found tect', async () => {
    setup();

    await waitForElementToBeRemoved(() => screen.queryByTestId('loader'));

    act(() => {
      fireEvent.change(screen.getByRole('textbox'), {
        target: { value: 'Spock' }
      });
      jest.runAllTimers();
    });

    await waitFor(() => screen.queryByTestId('loader'));
    await waitForElementToBeRemoved(() => screen.queryByTestId('loader'));

    expect(screen.getByText(charactersMessages.noDataFound)).toBeVisible();
  });
});
