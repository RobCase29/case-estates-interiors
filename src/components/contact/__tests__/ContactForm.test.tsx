import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import ContactForm from '../ContactForm';

describe('ContactForm', () => {
  const originalFetch = global.fetch;

  afterEach(() => {
    if ((global.fetch as jest.Mock).mockClear) {
      (global.fetch as jest.Mock).mockClear();
    }
    global.fetch = originalFetch;
  });

  test('submits form data and shows success message', async () => {
    const user = userEvent.setup();
    global.fetch = jest.fn(() =>
      Promise.resolve({ ok: true, json: () => Promise.resolve({}) })
    ) as jest.Mock;

    render(<ContactForm />);

    await user.type(screen.getByLabelText(/name/i), 'John Doe');
    await user.type(screen.getByLabelText(/email/i), 'john@example.com');
    await user.type(screen.getByLabelText(/message/i), 'Hello there');

    await user.click(screen.getByRole('button', { name: /send message/i }));

    expect(global.fetch).toHaveBeenCalledWith(
      '/api/contact',
      expect.objectContaining({ method: 'POST' })
    );

    expect(
      await screen.findByText(/thank you for reaching out/i)
    ).toBeInTheDocument();
  });

  test('displays error message when submission fails', async () => {
    const user = userEvent.setup();
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: false,
        json: () => Promise.resolve({ error: 'Server error' }),
      })
    ) as jest.Mock;

    render(<ContactForm />);

    await user.type(screen.getByLabelText(/name/i), 'John Doe');
    await user.type(screen.getByLabelText(/email/i), 'john@example.com');
    await user.type(screen.getByLabelText(/message/i), 'Hello there');

    await user.click(screen.getByRole('button', { name: /send message/i }));

    expect(await screen.findByText(/server error/i)).toBeInTheDocument();
  });
});
