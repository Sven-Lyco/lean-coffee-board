import EntryForm from './EntryForm.js';

export default {
  title: 'components/EntryForm',
  component: EntryForm,
  argTypes: { onClick: { action: 'onSubmit' } },
};

const Template = args => <EntryForm {...args} />;

export const Default = Template.bind({});
Default.args = {
  id: 'someID',
  labelText: 'labelName',
  placeholder: 'Add an entry',
};
