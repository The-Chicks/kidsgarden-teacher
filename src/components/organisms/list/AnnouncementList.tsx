import React, { useEffect, useState } from 'react';
import PanelLayout from '../../layouts/PanelLayout/ListPanelLayout';
import AnnouncementItem from '../../molecules/listitem/AnnouncementItem';
import Flex from '../../layouts/Flex';
import Button from '../../atoms/Button';
import { useNavigate } from 'react-router-dom';
import { AnnouncementListItemInterface } from '../../../libs/interfaces/Interfaces';

const AnnouncementList = () => {
  const navigate = useNavigate();
  const [announcements, setAnnouncements] = useState([
    {
      id: 1,
      title: '제목1',
    },
    {
      id: 2,
      title: '제목2',
    },
  ]);

  useEffect(() => {
    const tt = localStorage.getItem('noticeTitle');
    if (localStorage.getItem('noticeTitle') !== null) {
      const temp: AnnouncementListItemInterface = {
        id: 3,
        title: tt || '',
      };
      setAnnouncements([...announcements, temp]);
    }
  }, []);

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
