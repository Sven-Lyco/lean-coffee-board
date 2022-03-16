import useSWR from 'swr';
import styled from 'styled-components';

import Entry from './components/Entry';
import EntryForm from './components/EntryForm';
import LoadingCircle from './components/LoadingCircle';

const fetcher = (...args) => fetch(...args).then(res => res.json());

export default function App() {
  const {
    data: entries,
    error: entriesError,
    mutate: mutateEntries,
  } = useSWR('/api/entries', fetcher, {
    refreshInterval: 1000,
  });

  if (entriesError) return <h1>Sorry, could not fetch.</h1>;

  return (
    <AppWrapper>
      <StyledHeader>Lean Coffee Board</StyledHeader>
      <StyledSubHeader>Lean Coffee</StyledSubHeader>
      <EntryList role="list">
        {entries ? (
          entries.map(({ text, author, _id, tempId }) => (
            <li key={_id ?? tempId}>
              <Entry text={text} author={author} />
            </li>
          ))
        ) : (
          <LoadingCircle />
        )}
      </EntryList>
      <EntryForm onSubmit={handleNewEntry} />
    </AppWrapper>
  );

  async function handleNewEntry(text) {
    const newEntry = {
      text: text,
      author: 'Anonymous',
      tempId: Math.random(),
    };

    mutateEntries([...entries, newEntry], false);

    await fetch('/api/entries', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newEntry),
    });

    mutateEntries();
  }
}

const AppWrapper = styled.div`
  display: grid;
  height: 100vh;
  grid-template-rows: 60px 85px auto 48px;
`;

const StyledHeader = styled.h1`
  background-color: #00e7c2;
  color: white;
  text-align: center;
  box-shadow: 0 4px 8px 0 rgba(39, 50, 47, 0.25);
  font-family: 'Lobster', sans-serif;
  padding: 5px 0px;
  margin: 0;
`;

const StyledSubHeader = styled.h2`
  color: #27322f;
  padding: 10px;
  margin: 25px 16px 16px;
  border-top: 4px solid #27322f;

  &:hover {
    transition: #00e7c2 0.25s linear;
  }
`;

const EntryList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-auto-rows: 100px;
  overflow-y: auto;
  list-style: none;
  gap: 20px;
  margin: 0px 0px;
  padding: 0 20px 12px;
`;
