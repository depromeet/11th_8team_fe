import styled from '@emotion/styled';
import type { HTMLAttributes } from 'react';

import HomeIconButton from '@/components/commons/HomeIconButton';

interface Props extends HTMLAttributes<HTMLDivElement> {
  button?: React.ReactNode;
  withHomeButton?: boolean;
  isOnlyHomeButton?: boolean;
  className?: string;
  children?: React.ReactNode;
  bottomOffset?: number;
}

const BottomFloatingButtonArea = (props: Props) => {
  const {
    button,
    withHomeButton = false,
    isOnlyHomeButton = false,
    className,
    bottomOffset = 0,
    children,
  } = props;

  return (
    <StyledBottomFloatingButton className={className} bottomOffset={bottomOffset}>
      {children}
      {!isOnlyHomeButton && button}
      {withHomeButton && <HomeIconButton />}
    </StyledBottomFloatingButton>
  );
};

export default BottomFloatingButtonArea;

const StyledBottomFloatingButton = styled.div<{ bottomOffset: number }>`
  position: fixed;
  bottom: ${({ bottomOffset }) => bottomOffset}px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 18px;
  width: 100%;
  height: 100px;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 40.1%);
  z-index: 1;
`;
