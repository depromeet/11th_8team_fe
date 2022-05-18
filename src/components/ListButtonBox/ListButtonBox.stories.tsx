import styled from '@emotion/styled';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import ListButtonBox from './ListButtonBox';

export default {
  title: 'Components/ListButtonBox',
  component: ListButtonBox,
  args: {},
} as ComponentMeta<typeof ListButtonBox>;

const Template: ComponentStory<typeof ListButtonBox> = ({ ...args }) => <ListButtonBox {...args} />;

export const Default = Template.bind({});
Default.args = {
  iconName: 'Heart',
  text: '내가 반한 맥주',
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 0 31px;
`;
export const 리스트 = () => {
  return (
    <Container>
      <ListButtonBox iconName="Heart" text="내가 반한 맥주" />
      <ListButtonBox iconName="PlusCircle" text="요청한 맥주 현황" />
      <ListButtonBox iconName="ThreeDot" text="기타" />
    </Container>
  );
};
