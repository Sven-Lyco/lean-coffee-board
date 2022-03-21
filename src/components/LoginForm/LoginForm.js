import styled from 'styled-components';

export default function LoginForm({ onLogin }) {
  return (
    <CenterBox>
      <FormWrapper onSubmit={handleLogin} aria-labelledby="login">
        <label htmlFor="name">What is your Name?</label>
        <input
          id="name"
          name="name"
          placeholder="Add your Name"
          type="text"
          autoComplete="off"
          minLength={3}
          required
        ></input>
        <label htmlFor="color">Choose a color:</label>
        <input
          id="color"
          name="color"
          type="color"
          defaultValue="#909090"
        ></input>
        <button id="login">Remember me</button>
      </FormWrapper>
    </CenterBox>
  );

  function handleLogin(event) {
    event.preventDefault();
    const form = event.target;
    const name = form.elements.name.value;
    const color = form.elements.color.value;
    form.reset();

    if (name) {
      onLogin(name, color);
    }
  }
}

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: fit-content;
  padding: 20px;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
`;

const CenterBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
