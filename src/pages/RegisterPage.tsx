import React from 'react';
import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import styled from 'styled-components';
import Text from '../components/atoms/Text';
import Input from '../components/atoms/Input';
import Button from '../components/atoms/Button';

const RegisterPage = () => {
  const isMobile = useMediaQuery({
    query: '(max-width: 700px)',
  });
  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');
  const [pwConfirm, setPwConfirm] = useState('');
  const [groups, setGroups] = useState([]);
  const [selGroup, setSelGroup] = useState(-1);
  const [name, setName] = useState('');
  const [term, setTerm] = useState([false, false]);

  const register = () => {
    return;
  };

  return (
    <Main>
      <Article>
        <YellowBox>
          <Text fontSize={isMobile ? 1.8 : 2.5}>키즈가든</Text>
          <Text fontSize={isMobile ? 0.8 : 1.5}>
            우리 아이를 위한 스마트 알림장
          </Text>
        </YellowBox>
        <Form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <Input
            width="100%"
            height="50px"
            value={email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setEmail(e.target.value);
            }}
            placeholder="Email"
            name="email"
          />
          <Input
            type="password"
            width="100%"
            height="50px"
            value={pw}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setPw(e.target.value);
            }}
            placeholder="PW"
            name="pw"
          />
          <Input
            type="password"
            width="100%"
            height="50px"
            value={pwConfirm}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setPwConfirm(e.target.value);
            }}
            placeholder="PW 확인"
            name="pwConfirm"
          />
          <Input
            width="100%"
            height="50px"
            value={pwConfirm}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setPwConfirm(e.target.value);
            }}
            placeholder="소속"
            name="group"
          />
          <Input
            width="100%"
            height="50px"
            value={name}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setName(e.target.value);
            }}
            placeholder="선생님 이름"
            name="group"
          />

          <Label>
            <ChkBox
              type="checkbox"
              checked={term[0]}
              onChange={({ target: { checked } }) =>
                setTerm([checked, term[1]])
              }
            />
            키즈가든 서비스 이용약관 동의
          </Label>
          <Label>
            <ChkBox
              type="checkbox"
              checked={term[1]}
              onChange={({ target: { checked } }) =>
                setTerm([term[0], checked])
              }
            />
            개인정보 수집 이용 동의
          </Label>

          <Button width="100%" height="50px" onClick={register} color="yellow">
            회원가입
          </Button>
        </Form>
      </Article>
    </Main>
  );
};

const Main = styled.main`
  width: 100dvw;
  height: 100dvh;
  display: flex;
  justify-content: center;
  background-color: white;
`;

const Article = styled.article`
  width: 600px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 700px) {
    width: 80dvw;
  }
`;

const YellowBox = styled.div`
  width: 600px;
  height: 300px;
  background-color: #ffd100;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 4dvh;
  align-items: center;
  margin-bottom: 100px;

  @media screen and (max-width: 700px) {
    width: 80dvw;
    height: 20dvh;
  }
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Label = styled.label`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  gap: 20px;
  /* justify-content: space-between; */
`;
const ChkBox = styled.input`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: FFD100;
`;

export default RegisterPage;
