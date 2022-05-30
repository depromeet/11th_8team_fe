import React from 'react';
import { NextPage, GetServerSideProps } from 'next';
import styled from '@emotion/styled';
import { RecoilRoot } from 'recoil';

import RecordFirstStepContainer from './RecordFirstStepContainer';
import RecordSecondStepContainer from './RecordSecondStepContainer';
import RecordThirdStepContainer from './RecordThirdStepContainer';

import { Beers } from '@/constants/Beers';
import { Beer } from '@/types/Beer';
import Header from '@/components/Header';
import { BackButton } from '@/components/Header/extras';
import SwiperLayout from '@/components/layouts/SwiperLayout';

interface CreateRecordContainerProps {
  beer: Beer;
}

const StyledCreateRecordContainer = styled.div`
  height: 100%;

  & .record-layout {
    height: calc(100vh - 60px);
  }
`;

const CreateRecordContainer: NextPage<CreateRecordContainerProps> = ({ beer }) => {
  return (
    <StyledCreateRecordContainer>
      <Header leftExtras={<BackButton />} />
      <SwiperLayout className="record-layout">
        <RecordFirstStepContainer beerName={beer.name!} />
        <RecordSecondStepContainer beerName={beer.name!} />
        <RecordThirdStepContainer beer={beer} />
      </SwiperLayout>
    </StyledCreateRecordContainer>
  );
};

const CreateRecordRecoilWrapper: NextPage<CreateRecordContainerProps> = (props) => {
  return (
    <RecoilRoot>
      <CreateRecordContainer {...props} />
    </RecoilRoot>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {
      // TODO: 추후 api 연결
      beer: Beers[1],
    },
  };
};

export default CreateRecordRecoilWrapper;
