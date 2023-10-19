import styled from 'styled-components';

export const FrmRow = styled.div`
  width: 100%;
  padding: 10px 0 10px 0;
  display: flex;
  align-items: center;
  gap: 20px;

  @media screen and (max-width: 750px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;
