import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";
import Text from "../components/atoms/Text";
import Input from "../components/atoms/Input";
import Button from "../components/atoms/Button";

const LoginPage = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 700px)",
  });
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const login = () => {};

  return (
    <Main>
      <Article>
        <YellowBox isMobile={isMobile ? "true" : "false"}>
          <Text fontSize={isMobile ? 1.2 : 2.5}>키즈가든</Text>
          <Text fontSize={isMobile ? 0.8 : 1.5}>
            우리 아이를 위한 스마트 알림장
          </Text>
        </YellowBox>
        <Form
          onSubmit={(e) => {
            e.preventDefault();
          }}>
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
          <Button
            width="100%"
            height="50px"
            onClick={login}
            text="로그인"
            color="yellow"
          />
        </Form>
      </Article>
    </Main>
  );
};

const Main = styled.main`
  width: 100dvw;
  height: 100dvh;
`;

const Article = styled.article`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const YellowBox = styled.div<{ isMobile: string }>`
  width: ${(props) => (props.isMobile === "true" ? "80dvw" : "600px")};
  height: ${(props) => (props.isMobile === "true" ? "20dvh" : "300px")};
  background-color: #ffd100;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20%;
  align-items: center;

  margin-bottom: 100px;
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export default LoginPage;
