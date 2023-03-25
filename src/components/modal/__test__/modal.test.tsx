import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { Modal } from '..';
import userEvent from '@testing-library/user-event';

const onChangeDialogVisibility = jest.fn();

describe('Modal', () => {
  it('should render a modal with the correct children', async () => {
    render(
      <Modal
        children={<p>Hello World</p>}
        visible={true}
        onChangeDialogVisibility={onChangeDialogVisibility}
      />
    );

    expect(screen.getByText('Hello World')).toBeVisible();
  });

  it('should render a modal hiding the visibility of the children', async () => {
    render(
      <Modal
        children={<p>Hello World</p>}
        visible={false}
        onChangeDialogVisibility={onChangeDialogVisibility}
      />
    );

    expect(screen.queryByText('Hello World')).not.toBeInTheDocument();
  });

  it('should render a modal and use without problems the change dialog visibility function', async () => {
    const linkText = 'Change visibility!';
    render(
      <Modal
        children={
          <p>
            Hello World
            <a onClick={onChangeDialogVisibility}>{linkText}</a>
          </p>
        }
        visible={true}
        onChangeDialogVisibility={onChangeDialogVisibility}
      />
    );

    userEvent.click(screen.getByText(linkText));
    expect(onChangeDialogVisibility).toHaveBeenCalled();
  });
});
