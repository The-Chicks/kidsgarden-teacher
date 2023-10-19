import React from 'react';
import { StyledListPanelLayout } from './PanelLayout.style';

type Props = {
  children: React.ReactNode;
};

const ListPanelLayout = ({ children }: Props) => {
  return <StyledListPanelLayout>{children}</StyledListPanelLayout>;
};

export default ListPanelLayout;
