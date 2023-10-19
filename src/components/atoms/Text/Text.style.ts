import styled from 'styled-components';

export const Txt = styled.div<{ color: string; fontSize: number }>`
  vertical-align: middle;
  text-align: center;
  color: ${(props) => (props.color === 'black' ? 'black' : '#FF9900')};
  font-size: ${(props) => props.fontSize}rem;
`;
