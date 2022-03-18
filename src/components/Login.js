import styled from 'styled-components';

export default function Login({ onSubmit }) {
  return (
    <CenterBox>
      <FormWrapper onSubmit={handleSubmit} aria-labelledby="login">
        <label htmlFor="name">What's your Name?</label>
        <input
          id="name"
          name="name"
          placeholder="Add your Name"
          type="text"
          autoComplete="off"
          required
        ></input>
        <label htmlFor="color">Choose a color:</label>
        <input
          id="color"
          name="color"
          placeholder="choose your color"
          type="color"
        ></input>
        <button id="login">Remember me</button>
      </FormWrapper>
    </CenterBox>
  );

  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const inputElement = form.elements.name;
    const inputColor = form.elements.color;
    onSubmit(inputElement.value, inputColor.value);
    form.reset();
  }
}

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 300px;
  padding: 20px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
`;

const CenterBox = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
`;
