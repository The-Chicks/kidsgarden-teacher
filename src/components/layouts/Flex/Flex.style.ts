import styled from 'styled-components';

export const Row = styled.div<{
  width: string;
  height: string;
  margin: string;
  padding: string;
  direction: string;
  align: string;
  crossalign: string;
  gap: string;
}>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  display: flex;
  flex-direction: ${(props) => props.direction};
  justify-content: ${(props) => props.align};
  align-items: ${(props) => props.crossalign};
  gap: ${(props) => props.gap};
`;
