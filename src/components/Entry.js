import styled from 'styled-components';

import { VscAccount } from 'react-icons/vsc';
import { GoClock } from 'react-icons/go';

export default function Entry({ text, author, color }) {
  return (
    <Card color={color}>
      <TimeLogo>
        <GoClock />
      </TimeLogo>
      <AccountLogo color={color}>
        <VscAccount />
      </AccountLogo>
      <Author color={color}>{author}</Author>
      <p>{text}</p>
    </Card>
  );
}

const Card = styled.section`
  display: flex;
  align-content: space-between;
  padding: 20px;
  max-width: 400px;
  border: 1px solid #ddd;
  height: 100%;
  box-shadow: ${({ color }) => (color ? color : '#999')} 0px 8px 20px -5px,
    ${({ color }) => (color ? color : '#999')} 0px 8px 16px -8px;
  position: relative;
`;

const TimeLogo = styled.div`
  color: ${({ color }) => (color ? color : '#999')};
  position: absolute;
  top: 10px;
  right: 30px;
`;

const AccountLogo = styled.div`
  color: ${({ color }) => (color ? color : '#999')};
  position: absolute;
  top: 10px;
`;

const Author = styled.p`
  margin: 0;
  text-transform: capitalize;
  font-size: 1rem;
  color: ${({ color }) => (color ? color : '#999')};
  position: absolute;
  top: 10px;
  left: 45px;
`;
