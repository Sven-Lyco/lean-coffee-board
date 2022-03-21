import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import EntryForm from './EntryForm.js';

describe('EntryForm', () => {
  it('shows an input inside form-element and set a text', () => {
    const callback = jest.fn();
    render(<EntryForm onSubmit={callback} />);

    const form = screen.getByRole('form', { name: 'Create new entry' });
    const input = screen.getByLabelText('Entry text');

    expect(form).toBeInTheDocument();
    expect(input).toBeInTheDocument();
    expect(form).toContainElement(input);

    userEvent.type(input, 'This is a text.{enter}');

    expect(callback).toHaveBeenCalledWith('This is a text.');
  });
  it('Input has a minLength of 3 Letters for text', () => {
    const neverCalled = jest.fn();
    render(<EntryForm onSubmit={neverCalled} />);

    const input = screen.getByLabelText('Entry text');
    userEvent.type(input, 'AB{enter}'); // only 2 characters, but 3 are required

    expect(neverCalled).not.toHaveBeenCalled();
  });
  it('Input equals 3 or more Letters for text', () => {
    const neverCalled = jest.fn();
    render(<EntryForm onSubmit={neverCalled} />);

    const input = screen.getByLabelText('Entry text');
    userEvent.type(input, 'ABC{enter}'); // only 2 characters, but 3 are required

    expect(neverCalled).toHaveBeenCalled();
  });
});
