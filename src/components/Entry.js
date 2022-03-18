import styled from 'styled-components';

export default function Entry({ text, author, color }) {
  return (
    <Card>
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
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
`;

const Author = styled.p`
  margin: 0;
  text-transform: capitalize;
  font-size: 1rem;
  color: ${({ color }) => (color ? color : '#999')};
`;
