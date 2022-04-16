import useSWR from 'swr';
import styled from 'styled-components';
import { useState } from 'react';

import LoginForm from './components/LoginForm/LoginForm';
import Entry from './components/Entry/Entry';
import EntryForm from './components/EntryForm/EntryForm';
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
              entries.map(
                ({
                  text,
                  author,
                  _id,
                  tempId,
                  color,
                  createdAt,
                  isChecked,
                }) => (
                  <li key={_id ?? tempId}>
                    <Entry
                      _id={_id}
                      text={text}
                      author={author}
                      color={color}
                      createdAt={createdAt}
                      onDeleteEntry={() => handleDeleteEntry(_id)}
                      isChecked={isChecked}
                      onCheck={() => handleCheck(_id)}
                    />
                  </li>
                )
              )
            ) : (
              <LoadingCircle />
            )}
          </EntryList>
        </>
      )}
      {!userName && (
        <CenterLogin>
          <LoginForm onLogin={handleLogin} />
        </CenterLogin>
      )}
      {userName && (
        <EntryFormWrapper>
          <EntryForm onSubmit={handleNewEntry} />
        </EntryFormWrapper>
      )}
    </AppWrapper>
  );

  async function handleDeleteEntry(_id) {
    const filteredEntries = entries.filter(entry => entry._id !== _id);

    mutateEntries(filteredEntries, false);

    await fetch('/api/entries', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ _id }),
    });

    mutateEntries();
  }

  async function handleCheck(_id) {
    await fetch('/api/entries/mark-as-done', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ _id }),
    });

    mutateEntries();
  }

  function handleLogin(name, color) {
    setUserName(name);
    setUserColor(color);
  }

  async function handleNewEntry(text) {
    const newEntry = {
      text: text,
      author: userName,
      color: userColor,
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
  display: flex;
  flex-direction: column;
`;

const StyledHeader = styled.h1`
  display: block;
  background-color: #00e7c2;
  color: white;
  text-align: center;
  box-shadow: 0 4px 8px 0 rgba(39, 50, 47, 0.25);
  font-family: 'Lobster', sans-serif;
  padding: 5px 0px;
  margin: 0;
  position: fixed;
  width: 100%;
  z-index: 1;
`;

const CenterLogin = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const EntryList = styled.ul`
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  list-style: none;
  padding: 20px;
  margin: 55px 0px 50px 0px;
`;

const EntryFormWrapper = styled.div`
  position: fixed;
  bottom: 0;
`;
