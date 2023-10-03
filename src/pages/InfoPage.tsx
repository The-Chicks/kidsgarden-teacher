import styled from "styled-components";
import Text from "../components/atoms/Text";
import { useMediaQuery } from "react-responsive";
import { useState } from "react";
import Input from "../components/atoms/Input";
import Button from "../components/atoms/Button";

const InfoPage = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 700px)",
  });
  const [email, setEmail] = useState("");
  const [curPW, setCurPW] = useState("");
  const [pw, setPw] = useState("");
  const [pwConfirm, setPwConfirm] = useState("");
  const [groups, setGroups] = useState([]);
  const [selGroup, setSelGroup] = useState(-1);
  const [name, setName] = useState("");
  const [term, setTerm] = useState([false, false]);

  const register = () => {};
  return (
    <Article width={isMobile ? "80dvw" : "600px"}>
      <Text fontSize={isMobile ? 1.5 : 2.5}>선생님 정보 수정</Text>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
        }}>
        <Input
          width="100%"
          height="50px"
          value={email}
          onChange={() => {}}
          placeholder="Email"
          name="email"
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
        <div style={{ height: "50px" }} />
        <Input
          type="password"
          width="100%"
          height="50px"
          value={curPW}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setCurPW(e.target.value);
          }}
          placeholder="현재 PW"
          name="pw"
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

        <Button
          width="100%"
          height="50px"
          onClick={register}
          text="수정하기"
          color="yellow"
        />
      </Form>
    </Article>
  );
};

const Article = styled.article<{ width: string }>`
  width: ${(props) => props.width};
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 50px;
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export default InfoPage;
