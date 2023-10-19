import styled from 'styled-components';

export const Row = styled.div<{
  width: string;
  height: string;
  margin: string;
  padding: string;
  align: string;
  crossalign: string;
  gap: string;
}>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  justify-content: ${(props) => props.align};
  align-items: ${(props) => props.crossalign};
  display: flex;
  gap: ${(props) => props.gap};
`;
