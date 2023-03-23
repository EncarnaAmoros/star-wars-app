import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { Button } from '..';

describe('Button', () => {
  it('should render a button with the correct test', async () => {
    render(<Button text="Button test" />);

    expect(
      screen.getByRole('button', {
        name: /Button test/i
      })
    ).toBeVisible();
  });
});
