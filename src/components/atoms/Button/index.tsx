import styled from "styled-components";
import styles from "./Button.module.css";

type Props = {
  style?: any;
  width?: string;
  height?: string;
  onClick: any;
  text: string;
  fontSize?: number;
  color?: string;
  type?: string;
};

const Button = ({
  style,
  width = "auto",
  height = "auto",
  onClick,
  text,
  fontSize = 1,
  color = "transparent",
  type = "bg",
}: Props) => {
  return (
    <Btn
      className={`${type === "bg" ? styles.bg : styles.border} ${
        color === "transparent"
          ? styles.transparent
          : color === "black"
          ? styles.black
          : styles.yellow
      }`}
      style={style}
      onClick={onClick}
      width={width}
      height={height}
      fontSize={fontSize}>
      {text}
    </Btn>
  );
};

const Btn = styled.button<{ width: string; height: string; fontSize: number }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  font-size: ${(props) => props.fontSize}rem;
  padding: ${(props) => (props.width === "auto" ? "10px" : "0")};
  border-radius: 10px;
`;

export default Button;
