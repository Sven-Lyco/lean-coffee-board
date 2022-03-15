import { useState, useEffect } from 'react';
import styled from 'styled-components';

import Entry from './components/Entry';
import EntryForm from './components/EntryForm';

export default function App() {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    getEntries();

    async function getEntries() {
      const response = await fetch('/api/entries');
      const entries = await response.json();
      setEntries(entries);
    }
  }, []);

  return (
    <>
      <h1>Lean Coffee Board</h1>
      <Grid role="list">
        {entries.map(({ text, author }, index) => (
          <li key={index}>
            <Entry text={text} author={author} />
          </li>
        ))}
      </Grid>
      <EntryForm labelText="Add an Entry: " />
    </>
  );
}

const Grid = styled.ul`
  display: grid;
  gap: 20px;
  list-style: none;
  padding: 0;
`;
