import React from 'react';
import { SclRow } from './ScrollableRow.style';

type Props = {
  width?: string;
  height: string;
  children: React.ReactNode;
};

const ScrollableRow = ({ width = '100%', height, children }: Props) => {
  return (
    <SclRow width={width} height={height}>
      {children}
    </SclRow>
  );
};

export default ScrollableRow;
