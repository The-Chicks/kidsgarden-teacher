import styled from "styled-components";

type Props = {
  name: string;
  width?: string;
  height?: string;
  placeholder?: string;
  value: any;
  onChange: any;
  color: "black" | "orange";
  fontSize?: number;
};

const Input = ({
  name,
  width = "auto",
  height = "auto",
  placeholder = "",
  value,
  onChange,
  color = "black",
  fontSize = 1,
}: Props) => {
  return (
    <Inp
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      width={width}
      height={height}
      color={color}
      fontSize={fontSize}
    />
  );
};

const Inp = styled.input<{
  width: string;
  height: string;
  color: string;
  fontSize: number;
}>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  padding: 10px;
  color: ${(props) => (props.color === "black" ? "black" : "#FF9900")};
  font-size: ${(props) => props.fontSize}rem;
  border-radius: 10px;
  &:focus {
    border-color: #ff9900;
    outline: 1px solid #ff9900;
  }
`;

export default Input;
