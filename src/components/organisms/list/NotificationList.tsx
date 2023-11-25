import React from 'react';
import PanelLayout from '../../layouts/PanelLayout/ListPanelLayout';
import Flex from '../../layouts/Flex';
import Button from '../../atoms/Button';
import { useNavigate } from 'react-router-dom';
import { NotificationListItemInterface } from '../../../libs/interfaces/Interfaces';
import NotificationItem from '../../molecules/listitem/NotificationItem';

const NotificationList = () => {
  const navigate = useNavigate();
  const Notifications = [
    { id: 1, title: '유치원 알림장 제목입니다.' },
    { id: 2, title: '유치원 알림장 제목입니다.' },
    { id: 3, title: '유치원 알림장 제목입니다.' },
    { id: 4, title: '유치원 알림장 제목입니다.' },
  ];
  return (
    <>
      <Flex width="100%" align="flex-end">
        <Button
          color="orange"
          onClick={() => {
            navigate('/teacher/notification/add');
          }}
        >
          추가
        </Button>
      </Flex>
      <PanelLayout>
        {Notifications.map((Notification: NotificationListItemInterface) => {
          return (
            <NotificationItem
              notification={Notification}
              key={`${Notification.id}_Notification`}
            />
          );
        })}
      </PanelLayout>
    </>
  );
};

export default NotificationList;
