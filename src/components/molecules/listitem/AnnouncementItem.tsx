import React from 'react';
import { AnnouncementListItemInterface } from '../../../libs/interfaces/Interfaces';
import { ListItemContainer } from './ListItem.style';
import Text from '../../atoms/Text';
import { Link } from 'react-router-dom';

type Props = {
  announcement: AnnouncementListItemInterface;
};

const AnnouncementItem = ({ announcement }: Props) => {
  return (
    <Link to={`/teacher/announcement/${announcement.id}`}>
      <ListItemContainer>
        <Text style={{ width: '20%' }}>{announcement.id}</Text>
        <Text style={{ width: '70%' }}>{announcement.title}</Text>
      </ListItemContainer>
    </Link>
  );
};

export default AnnouncementItem;
