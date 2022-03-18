import styled from 'styled-components';

import { VscAccount } from 'react-icons/vsc';
import { GoClock } from 'react-icons/go';

export default function Entry({ text, author, color, date }) {
  return (
    <Card color={color}>
      <InfoWrapper>
        <AccountWrapper color={color}>
          <VscAccount />
          <p color={color}>{author}</p>
        </AccountWrapper>
        <TimeWrapper color={color}>
          <GoClock />
          <p>{date}</p>
        </TimeWrapper>
      </InfoWrapper>
      <p>{text}</p>
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
  height: 100%;
  box-shadow: ${({ color }) => (color ? color : '#999')} 0px 8px 20px -5px,
    ${({ color }) => (color ? color : '#999')} 0px 8px 16px -8px;
`;

const InfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TimeWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 2px 0px;
  color: ${({ color }) => (color ? color : '#999')};

  p {
    margin: 0px 0px 0px 5px;
    font-size: smaller;
  }
`;

const AccountWrapper = styled.div`
  display: flex;
  align-items: center;
  color: ${({ color }) => (color ? color : '#999')};

  p {
    margin: 0px 0px 0px 5px;
    text-transform: capitalize;
    font-size: smaller;
    color: ${({ color }) => (color ? color : '#999')};
  }
`;
