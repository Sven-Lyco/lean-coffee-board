import Login from './LoginForm.js';

export default {
  title: 'components/Login',
  component: Login,
  argTypes: {
    onLogin: 'onLogin',
  },
};

const Template = args => <Login {...args} />;

export const Default = Template.bind({});
Default.args = {};
