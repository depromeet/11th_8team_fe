import { ComponentStory, ComponentMeta } from '@storybook/react';

import TermsOfServiceContainer from './TermsOfServiceContainer';

export default {
  title: 'Pages/이용약관',
  component: TermsOfServiceContainer,
  args: {},
} as ComponentMeta<typeof TermsOfServiceContainer>;

const Template: ComponentStory<typeof TermsOfServiceContainer> = () => <TermsOfServiceContainer />;

export const Default = Template.bind({});
Default.args = {};
