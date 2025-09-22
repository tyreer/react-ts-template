import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Card from './Card';

describe('Card', () => {
  it('renders Hello World button and can be clicked', async () => {
    const user = userEvent.setup();

    render(<Card />);

    const button = screen.getByRole('button', { name: 'Hello World' });
    await user.click(button);

    expect(button).toBeInTheDocument();
  });
});
