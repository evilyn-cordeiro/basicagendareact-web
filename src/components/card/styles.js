import styled from 'styled-components';

/**
 * Estilo do topo do card
 * que recebe ícone e cor transparente.
 */
export const StyledTop = styled.div`
  width: 319px;
  height: 250px;
  display: flex;
  align-items: end;
  background-color: black;
  border-radius:10px;
  font-size: 20px;
`;
/**
 * Estido do card principal
 * que recebe os textos e ícone.
 */
export const StyledCard = styled.div`
  width:320px;
  height: 220px;
  background-color: #191970;
  display: flex;
  border-radius:10px;
  font-size: 20px;
`;
/**
 * Estilo do topo do card principal:
 * @StyledCard que recebe o título e o ícone.
 */
export const Top = styled.div`
  padding:20px;
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
  color:#ffffff;
`;

