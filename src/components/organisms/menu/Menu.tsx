import styled from "styled-components";

const Menu = () => {
  return <Nav>Menu</Nav>;
};

const Nav = styled.nav`
  width: 10dvw;
  height: calc(100dvh - 50px);
`;

const MenuSection = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transition: all 0.3s linear;
  margin-top: 20px;
`;

export default Menu;
