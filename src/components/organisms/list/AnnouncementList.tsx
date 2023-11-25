import React from 'react';
import PanelLayout from '../../layouts/PanelLayout/ListPanelLayout';
import AnnouncementItem from '../../molecules/listitem/AnnouncementItem';
import Flex from '../../layouts/Flex';
import Button from '../../atoms/Button';
import { useNavigate } from 'react-router-dom';
import { AnnouncementListItemInterface } from '../../../libs/interfaces/Interfaces';

const AnnouncementList = () => {
  const navigate = useNavigate();
  const announcements = [
    {
      id: 1,
      title: '유치원공지입니다공지입니다공지입니다공지입니다공지입니다',
    },
    {
      id: 2,
      title: '유치원공지입니다공지입니다공지입니다공지입니다공지입니다',
    },
    {
      id: 3,
      title: '유치원공지입니다공지입니다공지입니다공지입니다공지입니다',
    },
    {
      id: 4,
      title: '유치원공지입니다공지입니다공지입니다공지입니다공지입니다',
    },
    {
      id: 5,
      title: '공지 유치원공지입니다공지입니다공지입니다공지입니다공지입니다.',
    },
  ];
  return (
    <>
      <Flex width="100%" align="flex-end">
        <Button
          color="orange"
          onClick={() => {
            navigate('/teacher/announcement/add');
          }}
        >
          추가
        </Button>
      </Flex>
      <PanelLayout>
        {announcements.map((announcement: AnnouncementListItemInterface) => {
          return (
            <AnnouncementItem
              announcement={announcement}
              key={`${announcement.id}_Announcement`}
            />
          );
        })}
      </PanelLayout>
    </>
  );
};

export default AnnouncementList;
