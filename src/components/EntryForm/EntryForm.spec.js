import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import EntryForm from './EntryForm.js';

describe('EntryForm', () => {
  it('shows an input and set a text', () => {
    const callback = jest.fn();
    render(<EntryForm onSubmit={callback} />);

    const form = screen.getByRole('form', { name: 'Create new entry' });
    expect(form).toBeInTheDocument();

    const input = screen.getByLabelText('Entry text');
    userEvent.type(input, 'This is a text.{enter}');

    expect(form).toContainElement(input);

    expect(callback).toHaveBeenCalledWith('This is a text.');
  });
  it('has a minLength of 3 for text', () => {
    const neverCalled = jest.fn();
    render(<EntryForm onSubmit={neverCalled} />);

    const input = screen.getByLabelText('Entry text');
    userEvent.type(input, 'AB{enter}'); // only 2 characters, but 3 are required

    expect(neverCalled).not.toHaveBeenCalled();
  });
});
