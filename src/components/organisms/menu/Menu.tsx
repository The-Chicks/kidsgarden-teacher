import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../atoms/Button';

const Menu = () => {
  const navigate = useNavigate();
  const menus = [
    '학급',
    '공지사항',
    '식단',
    '등원 정보',
    '알림장',
    '앨범',
    '출석',
    '선생님 대화',
    '일정',
    '성장 기록',
  ];
  const links = [
    '/teacher/class',
    '/teacher/announcement',
    '식단',
    '등원 정보',
    '/teacher/notification',
    '앨범',
    '출석',
    '선생님 대화',
    '일정',
    '성장 기록',
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
