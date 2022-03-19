import styled from 'styled-components';
import ScreenReaderOnly from '../ScreenReaderOnly';

import { VscAdd } from 'react-icons/vsc';

export default function EntryForm({ onSubmit }) {
  return (
    <StyledForm onSubmit={handleSubmit} aria-labelledby="entry-form-name">
      <label htmlFor="entry-form">
        <ScreenReaderOnly>Entry text</ScreenReaderOnly>
      </label>
      <input
        id="entry-form"
        name="entry-form"
        placeholder="Add lean coffee note..."
        type="text"
        autoComplete="off"
        minLength={3}
        required
      />
      <button id="entry-form-name">
        <ScreenReaderOnly>Create new entry</ScreenReaderOnly>
        <VscAdd aria-hidden="true" />
      </button>
    </StyledForm>
  );

  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const inputElement = form.elements['entry-form'];
    onSubmit(inputElement.value);
    form.reset();
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
      text-transform: uppercase;
    }
  }
  button {
    background-color: white;
    border: 2px solid black;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    margin: 4px;
    padding-top: 4px;
    font-size: 30px;

    &:hover {
      background-color: black;
      color: white;
      transition: 0.4s;
    }

    &:active {
      background-color: black;
      color: white;
      transition: 0.4s;
    }
  }
`;
