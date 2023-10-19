import styled from 'styled-components';

export const Inp = styled.input<{
  width: string;
  height: string;
  color: string;
  fontSize: number;
}>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  padding: 10px;
  color: ${(props) => (props.color === 'black' ? 'black' : '#FF9900')};
  font-size: ${(props) => props.fontSize}rem;
  border: 1px solid black;
  border-radius: 10px;
  &:focus {
    border-color: #ffd100;
    outline: 1px solid #ffd100;
  }
`;
