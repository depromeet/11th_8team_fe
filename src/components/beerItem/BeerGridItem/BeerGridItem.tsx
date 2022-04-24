import React, { useState } from 'react';
import styled from '@emotion/styled';

import { ReactComponent as BookmarkIcon } from '@/assets/bookmark.svg';
import { ReactComponent as BookmarkIconFill } from '@/assets/bookmark_fill.svg';

// TODO: 페이지 단위에서 mock data 만들며 하드코딩한 이미지, 이름 등 맥주 정보 prop으로 받도록 수정하기

const BeerGridItem = () => {
  const [isBookMarked, setIsBookmarked] = useState(false);

  return (
    <BeerGridItemWrapper>
      <BeerGridItemContainer isBookMarked={isBookMarked}>
        <BookmarkButton onClick={() => setIsBookmarked((prev) => !prev)}>
          {isBookMarked ? <BookmarkIconFill /> : <BookmarkIcon />}
        </BookmarkButton>
        <Emoji src="https://static.toss.im/2d-emojis/svg/u1F619.svg" />
        <BeerImageMask>
          <BeerImage src="https://ifh.cc/g/X6B8Ra.png" />
        </BeerImageMask>
      </BeerGridItemContainer>
      <BeerName>제주 위트 에일</BeerName>
    </BeerGridItemWrapper>
  );
};

export default BeerGridItem;

const BeerGridItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

const BeerName = styled.div`
  font-size: 13px;
  color: white;
  text-align: center;
`;

const BeerGridItemContainer = styled.div<{ isBookMarked: boolean }>`
  position: relative;
  width: 104px;
  height: 104px;
  background: ${({ isBookMarked }) => (isBookMarked ? '#3e3be6' : 'rgba(255, 255, 255, 0.2)')};
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BookmarkButton = styled.button`
  width: 40px;
  height: 40px;
  position: absolute;
  top: 1px;
  right: 1px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin: 0;
  border: 0;
  outline: none;
  background: none;
  cursor: pointer;
`;

const Emoji = styled.img`
  width: 34px;
  height: 34px;
  position: absolute;
  bottom: -5px;
  right: -5px;
`;

const BeerImage = styled.img`
  width: 34px;
  height: 80px;
`;

// NOTE: 마스킹 참고 : https://www.w3schools.com/css/css3_masking.asp
const BeerImageMask = styled.div`
  -webkit-mask-box-image: url('https://ifh.cc/g/KQ8NLv.png');
  mask-image: url('https://ifh.cc/g/KQ8NLv.png');
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
`;