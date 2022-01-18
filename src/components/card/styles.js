import styled from 'styled-components';

/**
 * Estilo do topo do card
 * que recebe ícone e cor transparente
 * personalizada.
 */
export const StyledTop = styled.div`
  width: 271px;
  height: 216px;
  display: flex;
  align-items:end;
  background-color:hsl(43, 84%, 65%);
  border-radius: 15px;
  border:none;
  font-size: 20px;
  position: relative;
  overflow:hidden;
`;

export const IconContainer = styled.div`
  top: -10px;
  right: 26px;
  position: absolute;
`;

export const StyledCard = styled.div`
  width:  280px;
  height: 175px;
  background-color: hsl(235, 46%, 20%);
  border-radius: 15px 15px 0 0;
  z-index: 2;
`;

/**
 * Estido do card principal
 * que recebe os textos e ícone.
 */
/**
 * Estilo do topo do card principal:
 * @StyledCard que recebe o título e o ícone.
 */
export const Top = styled.div`
  padding: 35px 20px 7px;
  display: flex;
  align-items: center;
  justify-content:space-between;
  flex-grow:1;
`;
/**
 * Estilo do título do card principal:
 * @StyledCard que recebe o nome 
 * do card principal
 */
export const Title = styled.p`
  font-size: 18px;
`;

export const Center = styled.div`
  margin: 0;
  margin-left: 25px;
`;
/**
 * Estilo do Título1 do card principal
 * que recebe a quantidade de horas.
 */
export const Title1 = styled.p`
  font-size: 60px;
  font-weight: 400;
`;

/**
 * Estilo do subtítulo do card principal
 * que recebe a quantidade de horas
 * feitas na última semana.
 */
export const Subtitle = styled.p`  
  font-size: 12px;
  font-weight:300;  
`;

export const StyledProfile = styled.div`
  width: 271px;
  height: 484px;
  background-color: hsla(236, 45%, 20%, 1);
  border-radius: 20px;
  align-items;
  display: flex;
  justify-content:space-between;
  `;
  
  export const StyledFooter = styled.div `
  height: 310px;
  width: 271px;
  border-radius: 20px;
  background-color: hsla(235, 45%, 61%, 1);
  
`;
