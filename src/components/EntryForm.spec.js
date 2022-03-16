import { render, screen } from '@testing-library/react';
import EntryForm from './EntryForm';

describe('EntryForm', () => {
  it('shows one input field and a button', () => {
    render(<EntryForm />);

    const textInput = screen.getByLabelText(/entry/i);
    expect(textInput).toBeInTheDocument();

    const submitButton = screen.getByRole('button', { name: '+' });
    expect(submitButton).toBeInTheDocument();
  });
});
