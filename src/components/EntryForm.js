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
      <button>+</button>
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
  width: 100vw;
  display: flex;
  padding: 0px 16px;
  box-shadow: 0px -5px 10px 0px rgba(0, 0, 0, 0.18);

  input {
    flex: 1 1;
    border: none;
    outline: none;
    ::placeholder {
      color: #c8cbca;
    }
  }
  button {
    background-color: white;
    border: 2px solid black;
    border-radius: 50%;
    width: 32px;
    height: 32px;
    margin: 8px;
    padding-bottom: 7px;
    line-height: 0;
    font-size: 30px;

    &:active {
      background-color: black;
      color: white;
      transition: 0.4s;
    }
  }
`;
