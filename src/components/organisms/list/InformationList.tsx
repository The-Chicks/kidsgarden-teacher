import React from 'react';
import ListPanelLayout from '../../layouts/PanelLayout/ListPanelLayout';
import { InformationInterface } from '../../../libs/interfaces/Interfaces';
import InformationItem from '../../molecules/listitem/InformationItem';

const InformationList = () => {
  const infos: InformationInterface[] = [
    {
      info_id: 1,
      info_content: '등원정보1',
      user_id: '테스트1',
      info_date: '',
    },
    {
      info_id: 2,
      info_content: '등원정보2',
      user_id: '테스트1',
      info_date: '',
    },
    {
      info_id: 3,
      info_content: '등원정보3',
      user_id: '테스트1',
      info_date: '',
    },
  ];

  return (
    <>
      <ListPanelLayout>
        {infos.map((infodata: InformationInterface) => {
          return (
            <InformationItem
              infodata={infodata}
              key={`info_${infodata.info_id}`}
            />
          );
        })}
      </ListPanelLayout>
    </>
  );
};

export default InformationList;
