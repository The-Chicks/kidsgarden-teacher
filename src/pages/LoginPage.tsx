import styled from "styled-components";

const LoginPage = () => {
  return <div>LoginPage</div>;
};

const YellowBox = styled.div<{ isMobile: string }>`
  width: ${(props) => (props.isMobile === "true" ? "80dvw" : "600px")};
  height: ${(props) => (props.isMobile === "true" ? "20dvh" : "300px")};
`;

export default LoginPage;
