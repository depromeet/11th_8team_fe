import styled from '@emotion/styled';

import Review from '@/components/ReviewListItem';
import { IRecordsByBeer } from '@/apis';

interface Props {
  recordsByBeer: IRecordsByBeer[];
  lastItemRef?: any;
}

const ReviewList = ({ recordsByBeer, lastItemRef }: Props) => {
  return (
    <StyledReviewList>
      <ThisBeer>이 맥주는 어땠냐면,</ThisBeer>
      {recordsByBeer?.map((review, idx) => (
        <Review
          review={review}
          key={review.id}
          ref={idx === recordsByBeer.length - 1 ? lastItemRef : undefined}
        />
      ))}
      <div style={{ height: '90px' }} />
    </StyledReviewList>
  );
};

export default ReviewList;

const StyledReviewList = styled.section`
  padding: 0 20px;
`;

const ThisBeer = styled.p`
  ${({ theme }) => theme.fonts.SubTitle2};
  color: ${({ theme }) => theme.color.white};
  margin-right: auto;
  margin: 26px 0;
`;