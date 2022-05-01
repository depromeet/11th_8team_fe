import { ComponentStory, ComponentMeta } from '@storybook/react';
import styled from '@emotion/styled';

import BottomSheet from './BottomSheet';

export default {
  title: 'Components/BottomSheet',
  component: BottomSheet,
  argTypes: {
    open: { control: 'boolean', defaultValue: true },
    isFull: { control: 'boolean', defaultValue: false },
    backgroundColor: { control: 'color' },
    children: { control: 'readonly' },
    onClick: { control: 'readonly' },
  },
} as ComponentMeta<typeof BottomSheet>;

const StyledWrapper = styled.div`
  height: 6rem;
  padding: 1.6rem;

  h1 {
    font-size: 1.3rem;
    font-weight: 700;
    margin-bottom: 0.8rem;
  }
`;

const Template: ComponentStory<typeof BottomSheet> = (args) => {
  return (
    <BottomSheet {...args}>
      <StyledWrapper>
        <h1>바텀시트 📝</h1>
        <p>스토리북에서는 onClose prop을 넘겨주지 않아 dim 영역을 클릭해도 닫히지 않습니다 🥲</p>
      </StyledWrapper>
    </BottomSheet>
  );
};

export const Default = Template.bind({});
Default.args = {};
