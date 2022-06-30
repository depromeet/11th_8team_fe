import styled from '@emotion/styled';

import Header from '@/components/Header';
import { BackButton } from '@/components/Header/extras';

const TeamContainer = () => {
  return (
    <StyledTeamContainer>
      <Header leftExtras={<BackButton />}>팀원 소개</Header>
      <img src="/images/beerair_member.png" width="100%" height="auto" alt="비어에어멤버" />
      <section>
        <h1 className="top-margin">
          <a
            href="https://github.com/depromeet/sulsul-FE"
            target="_blank"
            rel="noopener noreferrer"
          >
            FrontEnd Github{' '}
          </a>
          에 놀러오세요!
        </h1>
      </section>
    </StyledTeamContainer>
  );
};

export default TeamContainer;

const StyledTeamContainer = styled.div`
  white-space: pre-line;
  & > section {
    padding: 0 20px;

    & > h1 {
      ${({ theme }) => theme.fonts.SubTitle1};
    }

    & > p {
      ${({ theme }) => theme.fonts.Body1};
      font-weight: 400;
    }

    & > a {
      text-decoration: none;
      ${({ theme }) => theme.fonts.Body1};
      color: white;
    }

    & > .top-margin {
      margin-top: 20px;
    }
  }
`;
