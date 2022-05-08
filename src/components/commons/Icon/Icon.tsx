import styled from '@emotion/styled';
import { SVGProps } from 'react';

import { svg } from './svg';

export type IconNameType = keyof typeof svg;
export interface IconProps extends SVGProps<SVGSVGElement> {
  name: IconNameType;
  size?: number;
  width?: number;
  height?: number;
  color?: string;
  className?: string;
}

interface StyledIconProps {
  width?: number;
  height?: number;
  color?: string;
}

const Icon = (props: IconProps) => {
  const { name, size = 30, width, height, className, ...rest } = props;
  const CurrentIcon = svg[name];

  return (
    <StyledIcon width={width ?? size} height={height ?? size} className={className} {...rest}>
      <CurrentIcon name={name} />
    </StyledIcon>
  );
};

export default Icon;

const StyledIcon = styled.svg<StyledIconProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  > svg {
    width: ${({ width }) => width}px;
    height: ${({ height }) => height}px;

    path {
      fill: ${({ color }) => (color ? color : 'none')};
    }
  }
`;
