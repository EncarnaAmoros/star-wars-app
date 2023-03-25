import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { planetMockData } from '../../../mocks/planet-mock';
import { planetMessages } from '../../../messages';
import { PlanetDetail } from '../planet-detail';
import { Planet } from '../../../types';

const setup = (planet: Planet) => render(<PlanetDetail planet={planet} />);

describe('Planet', () => {
  it('should render component without crashing', async () => {
    setup(planetMockData);

    expect(screen.getByText(planetMockData.name)).toBeVisible();
  });

  it('should render details of the planet', async () => {
    setup(planetMockData);

    expect(screen.getByText(planetMessages.climate)).toBeVisible();
    expect(screen.getByText(planetMockData.climate)).toBeVisible();
    expect(screen.getByText(planetMessages.diameter)).toBeVisible();
    expect(screen.getByText(planetMockData.diameter)).toBeVisible();
    expect(screen.getByText(planetMessages.population)).toBeVisible();
    expect(screen.getByText(planetMockData.population)).toBeVisible();
  });
});
