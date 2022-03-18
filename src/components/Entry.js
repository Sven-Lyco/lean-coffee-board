import styled from 'styled-components';

export default function Entry({ text, author, color }) {
  return (
    <Card color={color}>
      {text}
      <Author color={color}>{author}</Author>
    </Card>
  );
}

const Card = styled.section`
  display: grid;
  align-content: space-between;
  padding: 20px;
  max-width: 400px;
  border: 1px solid #ddd;
  height: 100%;
  box-shadow: ${({ color }) => (color ? color : '#999')} 0px 13px 27px -5px,
    ${({ color }) => (color ? color : '#999')} 0px 8px 16px -8px;
`;

const Author = styled.p`
  margin: 0;
  text-transform: capitalize;
  font-size: 1rem;
  color: ${({ color }) => (color ? color : '#999')};
`;
