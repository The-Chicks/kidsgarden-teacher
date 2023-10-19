import React from 'react';
import Text from '../../atoms/Text';
import { ClassInterface } from '../../../libs/interfaces/Interfaces';
import { ListItemContainer } from './ListItem.style';

type Props = {
  classdata: ClassInterface;
};

const ClassItem = ({ classdata }: Props) => {
  return (
    <ListItemContainer>
      <Text style={{ width: '10%' }}>{classdata.id}</Text>
      <Text style={{ width: '30%' }}>{classdata.name}</Text>
      <Text style={{ width: '30%' }}>{classdata.teacher}</Text>
      <Text style={{ width: '10%' }}>{classdata.num}명</Text>
    </ListItemContainer>
  );
};

export default ClassItem;
