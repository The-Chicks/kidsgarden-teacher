import React from 'react';
import Text from '../../atoms/Text';
import { InformationInterface } from '../../../libs/interfaces/Interfaces';
import { ListItemContainer } from './ListItem.style';

type Props = {
  infodata: InformationInterface;
};

const InformationItem = ({ infodata }: Props) => {
  return (
    <ListItemContainer>
      <Text style={{ width: '10%' }}>{infodata.info_id}</Text>
      <Text style={{ width: '30%' }}>{infodata.info_content}</Text>
    </ListItemContainer>
  );
};

export default InformationItem;
