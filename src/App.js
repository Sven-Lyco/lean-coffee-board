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
    <AppWrapper>
      <StyledHeader>Lean Coffee Board</StyledHeader>
      <StyledUl role="list">
        {entries.map(({ text, author }, index) => (
          <li key={index}>
            <Entry text={text} author={author} />
          </li>
        ))}
      </StyledUl>
      <EntryForm labelText="Add an Entry: " />
    </AppWrapper>
  );
}

const AppWrapper = styled.div`
  display: grid;
  grid-template-rows: 48px auto 48px;
  height: 100vh;
`;

const StyledHeader = styled.h1`
  background-color: #00e7c2;
  color: white;
  text-align: center;
  box-shadow: 0 4px 8px 0 rgba(39, 50, 47, 0.25);
  font-family: 'Lobster', sans-serif;
  padding: 0px 0px;
  margin: 0;
`;
const StyledUl = styled.ul`
  overflow-y: auto;
  display: grid;
  list-style: none;
  gap: 20px;
  margin: 0;
  padding: 0;
`;
