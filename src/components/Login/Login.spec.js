import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Login from './Login';

describe('Login', () => {
  it('renders two input fields and a button', () => {
    render(<Login />);

    const form = screen.getByRole('form', { name: /remember me/i });
    const nameInput = screen.getByLabelText(/what's your name?/i);
    const colorInput = screen.getByLabelText(/choose a color/i);
    const submitButton = screen.getByRole('button', {
      name: /remember me/i,
    });

    expect(form).toBeInTheDocument();
    expect(nameInput).toBeInTheDocument();
    expect(colorInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();

    expect(form).toContainElement(nameInput);
    expect(form).toContainElement(colorInput);
    expect(form).toContainElement(submitButton);
  });

  it('submits form data when input is filled out', () => {
    const callback = jest.fn();
    render(<Login onSubmit={callback} />);

    const nameInput = screen.getByLabelText(/what's your name?/i);
    const colorInput = screen.getByLabelText(/choose a color/i);
    const submitButton = screen.getByRole('button', {
      name: /remember me/i,
    });

    userEvent.type(nameInput, 'John');
    userEvent.type(colorInput, '#909090');
    userEvent.click(submitButton);

    expect(callback).toHaveBeenCalledWith('John', '#909090');
  });

  it('does not submit form data when input for name is empty', () => {
    const callback = jest.fn();
    render(<Login onSubmit={callback} />);

    const nameInput = screen.getByLabelText(/what's your name?/i);
    const submitButton = screen.getByRole('button', {
      name: /remember me/i,
    });

    userEvent.type(nameInput, 'John');
    userEvent.click(submitButton);

    expect(callback).not.toHaveBeenCalledWith();
  });
});
