import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { Loader } from '..';

describe('Button', () => {
  it('should render the loader without crash', async () => {
    render(<Loader />);

    expect(screen.getByTestId('loader')).toBeVisible();
  });
});
