import { useRouter } from 'next/router';
import styled from '@emotion/styled';

import Button from '@/components/commons/Button';
import LoginLayout from '@/components/layouts/LoginLayout';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > img {
    height: 35vh;
    min-width: 280px;
    max-width: 375px;
    margin-bottom: 4vh;
    object-fit: contain;
  }

  > p {
    ${(p) => p.theme.fonts.Body5};
    color: ${(p) => p.theme.color.whiteOpacity80};
    white-space: pre-wrap;
    text-align: center;
  }

  > b {
    ${(p) => p.theme.fonts.SubTitle3};
    color: ${(p) => p.theme.color.white};
    margin: 5vh 0;
  }
`;

const OnBoardingContainer = () => {
  const router = useRouter();

  const goToSignIn = () => {
    router.push('/signin');
  };

  return (
    <LoginLayout>
      <StyledWrapper>
        <img src="images/onboarding-hero.png" alt="" />
        <p>세계 맥주, 어디까지 마셔봤나요?{'\n'}Beer Air와 함께 세계 맥주를 정복해보세요!</p>
        <b>맥주로 떠나는 세계 여행</b>
        <Button type="primary" width="244px" onClick={goToSignIn}>
          시작하기
        </Button>
      </StyledWrapper>
    </LoginLayout>
  );
};

export default OnBoardingContainer;
