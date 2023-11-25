import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../atoms/Button';

const Menu = () => {
  const navigate = useNavigate();
  const menus = [
    '학급',
    '공지사항',
    '식단',
    '알림장',
    '앨범',
    '출석',
    '선생님 대화',
    '일정',
  ];
  const links = [
    '/teacher/class',
    '/teacher/announcement',
    '/teacher/diet',
    '/teacher/notification',
    '/teacher/album',
    '/teacher/attendance',
    '/teacher/conversation',
    '/teacher/schedule',
  ];

  return (
    <nav>
      {menus.map((menu: string, idx: number) => {
        return (
          <Button
            style={{ padding: '10px' }}
            key={`menu_${idx}_${menu}`}
            width="100%"
            onClick={() => {
              navigate(links[idx]);
            }}
          >
            {menu}
          </Button>
        );
      })}
    </nav>
  );
};

export default Menu;
