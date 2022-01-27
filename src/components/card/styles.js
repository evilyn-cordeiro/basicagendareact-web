/**
 * Antes de importar o styled-componentes 
 * é necessário instala-lo no projeto
 * via terminal.
 */
import styled from 'styled-components';

/**
 * Estilo do topo do card
 * que recebe ícone e cor transparente
 * personalizada.
 */
export const StyledTop = styled.div`
  width: 271px;
  min-height: 216px;
  display: flex;
  align-items:end;
  background-color:hsl(43, 84%, 65%);
  border-radius: 15px;
  border:none;
  font-size: 20px;
  position: relative;
  overflow:hidden;

  @media(max-width:375px){
    min-height: 140px;
    margin: 10px 0 ;
  }
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
  cursor:pointer;
  z-index: 2;
  padding: 35px 20px 7px;

  &:hover{
    background-color: #2D337B;
  }

  @media(max-width:375px){
    height: 110px;
  }
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
  margin-bottom: 7px;
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

  @media(max-width:375px){
    font-size:15px;
  }
`;

export const Center = styled.div`

  @media(max-width:375px){
    display:flex;
    align-items:center;
    justify-content:space-between;

  }
`;
/**
 * Estilo do Título1 do card principal
 * que recebe a quantidade de horas.
 */
export const Title1 = styled.p`
  font-size: 60px;
  font-weight: 400;

  @media(max-width:375px){
    font-size: 35px;
    font-weight: 300;

  }
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
export const Status = styled.p`
font-size:12px;
font-weight:300;

`;

