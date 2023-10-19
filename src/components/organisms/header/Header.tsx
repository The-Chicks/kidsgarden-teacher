import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { useNavigate } from 'react-router-dom';
import Button from '../../atoms/Button';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { userState } from '../../../libs/stores/UserStore';
import UserApi from '../../../libs/apis/UserApi';
import { useEffect } from 'react';
import Text from '../../atoms/Text';

const Header = () => {
  const navigate = useNavigate();
  const isMobile = useMediaQuery({
    query: '(max-width: 700px)',
  });
  const user = useRecoilValue(userState);
  const setUser = useSetRecoilState(userState);

  useEffect(() => {
    const token = localStorage.getItem('KE_accessToken');
    if (user.name === '' && token) {
      console.log('토큰 다시 파싱');
      const info = UserApi.parseJwt(token);
      console.log(info);
      setUser({ name: info.name, email: info.email, id: info.id });
    } else {
      console.log('토큰 없음');
    }
  }, []);

  const logout = () => {
    console.log('Log Out');
    localStorage.removeItem('KE_accessToken');
    localStorage.removeItem('KE_refreshToken');
    setUser({ name: '', email: '', id: '' });
    navigate('/');
  };

  return (
    <header>
      <Text
        style={{
          width: isMobile ? '100px' : '10dvw',
          height: '50px',
          backgroundColor: '#FFD100',
        }}
        fontSize={1.5}
      >
        {isMobile ? (
          <img
            src="/kidsgarden.png"
            height={'50px'}
            style={{ marginBottom: '20px' }}
          />
        ) : (
          '키즈가든'
        )}
      </Text>
      {isMobile ? (
        <img
          src={'/icons/Menu.svg'}
          width={'30px'}
          height={'30px'}
          alt="menu"
        />
      ) : (
        <span style={{ display: 'flex', gap: '20px' }}>
          <Button
            onClick={() => {
              navigate('/info');
            }}
          >
            {user.name == '' ? '닉네임' : user.name}
          </Button>
          <Button onClick={logout}>로그아웃</Button>
        </span>
      )}
    </header>
  );
};

export default Header;
