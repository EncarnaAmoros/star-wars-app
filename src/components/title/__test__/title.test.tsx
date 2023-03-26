import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { Title } from '..';

describe('Title', () => {
  it('should render the title without crash', async () => {
    render(<Title text="Test title" />);

    expect(screen.getByText('Test title')).toBeVisible();
  });
});
