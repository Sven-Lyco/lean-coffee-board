import useSWR from 'swr';
import styled from 'styled-components';
import { useState } from 'react';
import dayjs from 'dayjs';

import Login from './components/Login';
import Entry from './components/Entry';
import EntryForm from './components/EntryForm';
import LoadingCircle from './components/LoadingCircle';

const fetcher = (...args) => fetch(...args).then(res => res.json());

export default function App() {
  const [userColor, setUserColor] = useState('');
  const [userName, setUserName] = useState('');

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
      {userName && (
        <>
          <EntryList role="list">
            {entries ? (
              entries.map(({ text, author, _id, tempId, color, date }) => (
                <li key={_id ?? tempId}>
                  <Entry
                    text={text}
                    author={author}
                    color={color}
                    date={date}
                  />
                </li>
              ))
            ) : (
              <LoadingCircle />
            )}
          </EntryList>
        </>
      )}
      {!userName && <Login onSubmit={handleLogin} />}
      {userName && <EntryForm onSubmit={handleNewEntry} />}
    </AppWrapper>
  );

  function handleLogin(name, color) {
    const newUser = name;
    setUserName(newUser);

    const newUserColor = color;
    setUserColor(newUserColor);
    console.log(userColor);
  }

  async function handleNewEntry(text) {
    const newEntry = {
      text: text,
      author: userName,
      color: userColor,
      date: dayjs().format(' D.MM.YY H:mm'),
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
  grid-template-rows: 60px auto 48px;
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

const EntryList = styled.ul`
  overflow-y: auto;
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  list-style: none;
  padding: 20px;
  margin: 0;
`;
