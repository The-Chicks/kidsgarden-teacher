import styled from "styled-components";

type Props = {
  style?: any;
  children: React.ReactNode;
  color?: "black" | "orange";
  fontSize?: number;
};

const Text = ({ style, children, color = "black", fontSize = 1 }: Props) => {
  return (
    <Txt style={style} color={color} fontSize={fontSize}>
      {children}
    </Txt>
  );
};

const Txt = styled.div<{ color: string; fontSize: number }>`
  vertical-align: middle;
  text-align: center;
  color: ${(props) => (props.color === "black" ? "black" : "#FF9900")};
  font-size: ${(props) => props.fontSize}rem;
`;

export default Text;
