import React from 'react';
import Text from '../../atoms/Text';
import { ConverstaionInterface } from '../../../libs/interfaces/Interfaces';
import { ListItemContainer } from './ListItem.style';

type Props = {
  conversationdata: ConverstaionInterface;
};

const ConversationItem = ({ conversationdata }: Props) => {
  return (
    <ListItemContainer>
      <Text style={{ width: '10%' }}>{conversationdata.conv_id}</Text>
      <Text style={{ width: '30%' }}>{conversationdata.conv_title}</Text>
    </ListItemContainer>
  );
};

export default ConversationItem;
