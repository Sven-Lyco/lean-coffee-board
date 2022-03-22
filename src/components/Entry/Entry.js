import styled from 'styled-components';
import dayjs from 'dayjs';

import { VscAccount } from 'react-icons/vsc';
import { VscTrash } from 'react-icons/vsc';
import { GoClock } from 'react-icons/go';

import ScreenReaderOnly from '../ScreenReaderOnly';

export default function Entry({
  text,
  author,
  color,
  createdAt,
  onDeleteEntry,
}) {
  return (
    <Card color={color}>
      <InfoWrapper>
        <AccountWrapper color={color}>
          <VscAccount />
          <p color={color}>{author}</p>
        </AccountWrapper>
        <ScreenReaderOnly>
          <label htmlFor="mark-as-done">Mark as done</label>
        </ScreenReaderOnly>
        <input type="checkbox" name="mark-as-done" id="mark-as-done" />
      </InfoWrapper>
      <p>{text}</p>
      <TimeWrapper color={color}>
        <GoClock />
        <p>
          {createdAt
            ? dayjs(createdAt).format('DD.MM.YYYY HH:mm')
            : 'just created'}
        </p>
      </TimeWrapper>
      <DeleteWrapper onClick={onDeleteEntry}>
        <VscTrash />
      </DeleteWrapper>
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
  position: relative;
`;

const InfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const AccountWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 0px;
  color: ${({ color }) => (color ? color : '#999')};

  p {
    margin: 2px 0px 0px 3px;
    text-transform: capitalize;
    font-size: smaller;
    color: ${({ color }) => (color ? color : '#999')};
  }
`;

const TimeWrapper = styled.div`
  position: absolute;
  bottom: 8px;
  left: 8px;
  display: flex;
  align-items: center;
  margin: 0px;
  color: ${({ color }) => (color ? color : '#999')};

  p {
    margin: 2px 0px 0px 3px;
    font-size: smaller;
  }
`;

const DeleteWrapper = styled.div`
  position: absolute;
  bottom: 5px;
  right: 7px;

  &:hover {
    color: red;
    cursor: pointer;
  }
`;
