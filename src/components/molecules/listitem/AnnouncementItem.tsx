import React from 'react';
import { AnnouncementListItemInterface } from '../../../libs/interfaces/Interfaces';
import { ListItemContainer } from './ListItem.style';
import Text from '../../atoms/Text';

type Props = {
  announcement: AnnouncementListItemInterface;
};

const AnnouncementItem = ({ announcement }: Props) => {
  return (
    <ListItemContainer>
      <Text style={{ width: '20%' }}>{announcement.id}</Text>
      <Text style={{ width: '70%' }}>{announcement.title}</Text>
    </ListItemContainer>
  );
};

export default AnnouncementItem;
