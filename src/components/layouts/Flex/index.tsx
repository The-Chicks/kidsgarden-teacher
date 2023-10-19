import React from 'react';
import { Row } from './Flex.style';

type Props = {
  width?: string;
  height?: string;
  margin?: string;
  padding?: string;
  align?: string;
  crossalign?: string;
  gap?: string;
  children: React.ReactNode;
};

const Flex = ({
  width = 'auto',
  height = 'auto',
  margin = '0',
  padding = '0',
  align = 'flex-start',
  crossalign = 'center',
  gap = '10px',
  children,
}: Props) => {
  return (
    <Row
      width={width}
      height={height}
      margin={margin}
      padding={padding}
      align={align}
      crossalign={crossalign}
      gap={gap}
    >
      {children}
    </Row>
  );
};

export default Flex;
