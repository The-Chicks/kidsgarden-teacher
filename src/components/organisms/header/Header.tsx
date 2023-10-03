import { useMediaQuery } from "react-responsive";
import Menu from "/icons/menu.svg";
import { useNavigate } from "react-router-dom";
import Button from "../../atoms/Button";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { userState } from "../../../libs/stores/UserStore";
import UserApi from "../../../libs/apis/UserApi";
import { useEffect } from "react";
import Text from "../../atoms/Text";

const Header = () => {
  const navigate = useNavigate();
  const isMobile = useMediaQuery({
    query: "(max-width: 700px)",
  });
  const user = useRecoilValue(userState);
  const setUser = useSetRecoilState(userState);

  useEffect(() => {
    const token = localStorage.getItem("KE_accessToken");
    if (user.name == "" && token) {
      console.log("토큰 다시 파싱");
      let info = UserApi.parseJwt(localStorage.getItem("KE_accessToken")!);
      console.log(info);
      setUser({ name: info.name, email: info.email, id: info.id });
    } else {
      console.log("토큰 없음");
    }
  }, []);

  const logout = () => {
    console.log("Log Out");
    localStorage.removeItem("KE_accessToken");
    localStorage.removeItem("KE_refreshToken");
    setUser({ name: "", email: "", id: "" });
    navigate("/");
  };

  return (
    <header>
      <Text
        style={{
          width: isMobile ? "100px" : "10dvw",
          height: "50px",
          backgroundColor: "#FFD100",
        }}
        fontSize={1.5}>
        키즈가든
      </Text>
      {isMobile ? (
        <img src={Menu} width={"30px"} height={"30px"} />
      ) : (
        <span style={{ display: "flex", gap: "20px" }}>
          <Button
            onClick={() => {
              navigate("/info");
            }}
            text={user.name == "" ? "닉네임" : user.name}
          />
          <Button onClick={logout} text="로그아웃" />
        </span>
      )}
    </header>
  );
};

export default Header;
