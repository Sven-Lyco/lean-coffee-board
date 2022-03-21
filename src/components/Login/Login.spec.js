import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Login from './Login';

describe('Login', () => {
  it('renders two input fields and a button', () => {
    render(<Login />);

    const form = screen.getByRole('form', { name: /remember me/i });
    const nameInput = screen.getByLabelText('What is your Name?');
    const colorInput = screen.getByLabelText('Choose a color:');
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

    const nameInput = screen.getByLabelText('What is your Name?');
    const colorInput = screen.getByLabelText('Choose a color:');
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

    const submitButton = screen.getByRole('button', {
      name: /remember me/i,
    });
    userEvent.click(submitButton);
    expect(callback).not.toHaveBeenCalled();
  });

  it('takes an optional color that has a default value', () => {
    const callback = jest.fn();
    render(<Login onSubmit={callback} />);

    const nameInput = screen.getByLabelText('What is your Name?', {
      selector: 'input',
    });
    userEvent.type(nameInput, 'Jane');

    const colorInput = screen.getByLabelText('Choose a color:', {
      selector: 'input',
    });
    fireEvent.input(colorInput, { target: { value: '#ff0033' } });

    const submitButton = screen.getByRole('button', {
      name: /remember me/i,
    });
    userEvent.click(submitButton);

    expect(callback).toHaveBeenCalledWith('Jane', '#ff0033');
  });
});
