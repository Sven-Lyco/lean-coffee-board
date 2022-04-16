import styled from 'styled-components';
import dayjs from 'dayjs';

import { VscAccount } from 'react-icons/vsc';
import { VscTrash } from 'react-icons/vsc';
import { GoClock } from 'react-icons/go';

import ScreenReaderOnly from '../ScreenReaderOnly';

export default function Entry({
  _id,
  text,
  author,
  color,
  createdAt,
  onDeleteEntry,
  onCheck,
  isChecked,
}) {
  return (
    <Card color={color}>
      <FlexBetween>
        <Author color={color}>
          <VscAccount color={color} /> {author}
        </Author>

        <label htmlFor={'mark-as-done' + _id}>
          <ScreenReaderOnly>Mark as done</ScreenReaderOnly>
        </label>
        <input
          type="checkbox"
          name="mark-as-done"
          id={'mark-as-done' + _id}
          checked={isChecked}
          onChange={onCheck}
        />
      </FlexBetween>
      <p>{text}</p>
      <FlexBetween>
        <TimeWrapper>
          <GoClock />
          <p>
            {createdAt
              ? dayjs(createdAt).format('DD.MM.YYYY HH:mm')
              : 'just created'}
          </p>
        </TimeWrapper>
        <TrashButton onClick={onDeleteEntry} />
      </FlexBetween>
    </Card>
  );
}

const Card = styled.section`
  display: flex;
  flex-direction: column;
  align-content: space-between;
  padding: 20px;
  max-width: 400px;
  border: 1px solid #ddd;
  box-shadow: ${({ color }) => (color ? color : '#999')} 0px 8px 20px -5px,
    ${({ color }) => (color ? color : '#999')} 0px 8px 16px -8px;
`;

const FlexBetween = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Author = styled.p`
  margin: 0;
  font-size: 1rem;
  color: ${p => p.color ?? '#555'};
`;

const TimeWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 0px;

  p {
    margin: 0px 0px 0px 3px;
    font-size: smaller;
  }
`;

const TrashButton = styled.button.attrs(() => ({
  children: (
    <>
      <ScreenReaderOnly>Delete</ScreenReaderOnly>
      <VscTrash />
    </>
  ),
}))`
  border: none;
  background: transparent;
  width: min-content;
  padding: 2px 0px 0px 0px;
  font-size: 1.2rem;
  &:hover {
    color: crimson;
  }
  &:focus:focus-visible {
    outline: 2px dashed;
  }
`;
