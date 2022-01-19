import styled from "styled-components";
import CardApp, {ProfileContent} from './components/card';

export const Container = styled.div`
  height: 100vh;
  width: 1224px;
  display:flex;
  justify-content:space-between;
  align-items:center;

  @media(max-width: 375px) {
    flex-direction: column;
    width: 100vw;
  }
`;

export const StylePlay = styled(CardApp)`
  background-color: hsla(195, 74%, 62%, 1);
`;

export const StyleWork = styled(CardApp)`
  background-color: hsla(15, 100%, 70%, 1);
`;

export const StyleSports = styled(CardApp)`
  background-color: hsla(145, 58%, 55%, 1);

`;

export const StyleStudy = styled(CardApp)`
background-color: hsla(348, 100%, 68%, 1);
  `;

export const StyleSocial = styled(CardApp)`
background-color:hsla(264, 64%, 52%, 1);
`;

export const StyleSelfCare = styled(CardApp)`
background-color: hsla(43, 84%, 65%, 1);
`;

export const Row = styled.div`
    max-width:900px;
    height: 474px;
    display:flex; 
    flex-wrap:wrap;
    justify-content:space-between;
    align-content:space-between;

    @media(max-width: 375px) {
      flex-direction: column;
      max-width: 800px;
      height:100vh;
      flex-wrap:nowrap;
    }
`
