import { useState } from 'react';
import styled from 'styled-components';

export default function EntryForm({ labelText, onAddEntry }) {
  const [entryText, setEntryText] = useState('');

  return (
    <StyledForm onSubmit={handleSubmit}>
      {/* <label htmlFor="entry-form">{labelText}</label> */}
      <input
        id="entry-form"
        name="entry-form"
        placeholder="Write your text here..."
        type="text"
        value={entryText}
        onChange={event => setEntryText(event.target.value)}
        aria-label="Add an Entry"
        autoComplete="off"
        required
      />
      <button aria-label="Add Entry">Add</button>
    </StyledForm>
  );

  function handleSubmit(event) {
    event.preventDefault();
    console.log(entryText);
    //onAddEntry(entryText);
    setEntryText('');
  }
}

const StyledForm = styled.form`
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  padding: 5px;
`;
