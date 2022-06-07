import { ComponentStory, ComponentMeta } from '@storybook/react';

import Review from './Review';
import { Reviews } from '@/constants/Reviews';

export default {
  title: 'Components/Review',
  component: Review,
  argTypes: {
    me: { control: 'boolean' },
    userName: { control: 'text', name: 'userName' },
    border: { control: 'boolean' },
  },
} as ComponentMeta<typeof Review>;

const Template: ComponentStory<typeof Review> = (args) => <Review {...args} />;

export const Default = Template.bind({});
Default.args = {
  review: { ...Reviews[0] },
};
