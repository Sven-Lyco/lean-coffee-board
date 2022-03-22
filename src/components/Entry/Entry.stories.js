import Entry from './Entry.js';

export default {
  title: 'components/Entry',
  component: Entry,
  argTypes: {
    onDeleteEntry: 'onDelete',
    onCheck: 'onCheck',
  },
};

const Template = args => <Entry {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: 'This is a text',
  author: 'Jane Doe',
  color: 'gray',
};
export const Checked = Template.bind({});
Checked.args = {
  text: 'This is a text',
  author: 'Jane Doe',
  color: 'gray',
  isChecked: true,
};
