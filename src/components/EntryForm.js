import { useState } from 'react';

export default function EntryForm({ labelText, onAddEntry }) {
  const [entryText, setEntryText] = useState('');

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="entry-form">{labelText}</label>
      <input
        id="entry-form"
        name="entry-form"
        placeholder="Write your text here..."
        type="text"
        value={entryText}
        onChange={event => setEntryText(event.target.value)}
        autoComplete="off"
        required
      />
      <button aria-label="Add Entry">Add</button>
    </form>
  );

  function handleSubmit(event) {
    event.preventDefault();
    console.log(entryText);
    //onAddEntry(entryText);
    setEntryText('');
  }
}
