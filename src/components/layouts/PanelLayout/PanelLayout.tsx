import React from 'react';
import { StyledPanelLayout } from './PanelLayout.style';

type Props = {
  children: React.ReactNode;
};

const PanelLayout = ({ children }: Props) => {
  return <StyledPanelLayout>{children}</StyledPanelLayout>;
};

export default PanelLayout;
