import styled from 'styled-components';

export default function Entry({ text, author }) {
  return (
    <Card>
      {text} ({author})
    </Card>
  );
}

const Card = styled.section`
  margin: 0px 10px;
  padding: 20px;
  max-width: 400px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 8px 15px -7px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
`;
