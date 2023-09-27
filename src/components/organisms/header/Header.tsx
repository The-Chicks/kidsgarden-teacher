import { useMediaQuery } from "react-responsive";
import styled from "styled-components";
import Menu from "/icons/menu.svg";
import { useNavigate } from "react-router-dom";
import Button from "../../atoms/Button";
import {
  userEmail,
  userNameState,
  userId,
} from "../../../libs/stores/UserStore";

const Header = () => {
  const navigate = useNavigate();
  const isMobile = useMediaQuery({
    query: "(max-width: 700px)",
  });
  // const userEmail = useRecoilValue;

  return (
    <header>
      <Logo>키즈가든</Logo>
      {isMobile ? (
        <img src={Menu} width={"50px"} height={"50px"} />
      ) : (
        <div>
          <Button
            onClick={() => {
              navigate("/info");
            }}
            text="닉네임"
          />
          <Button
            onClick={() => {
              navigate("/");
            }}
            text="로그아웃"
          />
        </div>
      )}
    </header>
  );
};

const Logo = styled.div`
  width: 150px;
  height: 50px;
  color: black;
  background-color: #ffd100;
`;

export default Header;
