import { ReactChild } from 'react';
import styled from '@emotion/styled';

import Icon from '@/components/commons/Icon';

interface BeerRequestLayoutProps {
  title: string;
  children: ReactChild;
}

const StyledBeerRequestLayout = styled.article`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  height: 520px;
  padding: 70px 0 90px 0;
  border-radius: 20px;

  background-color: ${(p) => p.theme.color.white};

  overflow: hidden;

  > .barcode-top {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    margin: 0 auto;
  }

  > .barcode-bottom {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    margin: 0 auto;
  }
`;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  border-left: 12px solid ${(p) => p.theme.color.yellow};
  border-right: 12px solid ${(p) => p.theme.color.yellow};

  > h1 {
    margin: 4px 0 0;
    ${(p) => p.theme.fonts.H4};
    color: ${(p) => p.theme.color.black100};
    text-align: center;
    white-space: pre-line;
  }
`;

const BeerRequestLayout: React.FC<BeerRequestLayoutProps> = ({ title, children }) => {
  return (
    <StyledBeerRequestLayout>
      <Icon className="barcode-top" name="Barcode" width={240} height={24} />
      <StyledWrapper>
        <h1>{title}</h1>
        {children}
      </StyledWrapper>
      <Icon className="barcode-bottom" name="Barcode" width={240} height={60} />
    </StyledBeerRequestLayout>
  );
};

export default BeerRequestLayout;
