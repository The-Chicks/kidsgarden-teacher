import styled from 'styled-components';

export const StyledListPanelLayout = styled.section`
  width: calc(90dvw - 40px);
  background-color: white;
  border-radius: 20px;
  padding: 20px;
  display: grid;
  grid-template-columns: 45% 45%;
  grid-column-gap: 10%;
  grid-row-gap: 10px;

  @media screen and (max-width: 750px) {
    width: calc(100dvw - 40px);
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`;

export const StyledPanelLayout = styled.section`
  width: calc(90dvw - 40px);
  background-color: white;
  border-radius: 20px;
  padding: 20px;

  @media screen and (max-width: 750px) {
    width: calc(100dvw - 40px);
  }
`;
