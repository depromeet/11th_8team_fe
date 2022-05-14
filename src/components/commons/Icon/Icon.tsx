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

export default function Icon(props: IconProps) {
  const { name, size = 30, width, height, color, className, ...rest } = props;
  const CurrentIcon = svg[name];

  return (
    <StyledIcon
      width={width ?? size}
      height={height ?? size}
      color={color}
      className={className}
      {...rest}
    >
      <CurrentIcon name={name} />
    </StyledIcon>
  );
}


const StyledIcon = styled.svg<StyledIconProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  > svg {
    width: ${({ width }) => width}px;
    height: ${({ height }) => height}px;

    path {
      fill: ${({ color }) => (color ? color : undefined)};
    }
  }
`;
