import React from 'react';
import { ListItemContainer } from './ListItem.style';
import Text from '../../atoms/Text';
import { NotificationListItemInterface } from '../../../libs/interfaces/Interfaces';

type Props = {
  notification: NotificationListItemInterface;
};

const NotificationItem = ({ notification }: Props) => {
  return (
    <ListItemContainer>
      <Text style={{ width: '20%' }}>{notification.id}</Text>
      <Text style={{ width: '70%' }}>{notification.title}</Text>
    </ListItemContainer>
  );
};

export default NotificationItem;
