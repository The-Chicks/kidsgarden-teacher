import React from 'react';
import { Row } from './Flex.style';

type Props = {
  style?: any;
  width?: string;
  height?: string;
  margin?: string;
  padding?: string;
  direction?: string;
  align?: string;
  crossalign?: string;
  gap?: string;
  children: React.ReactNode;
};

const Flex = ({
  style = {},
  width = 'auto',
  height = 'auto',
  margin = '0',
  padding = '0',
  direction = 'row',
  align = 'flex-start',
  crossalign = 'center',
  gap = '10px',
  children,
}: Props) => {
  return (
    <Row
      style={style}
      width={width}
      height={height}
      margin={margin}
      padding={padding}
      direction={direction}
      align={align}
      crossalign={crossalign}
      gap={gap}
    >
      {children}
    </Row>
  );
};

export default Flex;
