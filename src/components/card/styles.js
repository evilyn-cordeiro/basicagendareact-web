import styled from 'styled-components';

/**
 * Estilo do topo do card
 * que recebe ícone e cor transparente
 * personalizada.
 */
export const StyledTop = styled.div`
  width: 319px;
  height: 250px;
  display: flex;
  align-items: end;
  background-color: #E6A532a2;
  border-radius:20px;
  font-size: 20px;
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
  padding:20px;
  display: flex;
  align-items: center;
  justify-content:space-between;
  flex-grow:1;
`;

export const StyledCard = styled.div`
  width:  320px;
  height: 200px;
  background-color: #191970;
  display: flex;
  border-radius:20px;
  font-size: 20px;
`;

/**
 * Estilo do título do card principal:
 * @StyledCard que recebe o nome 
 * do card principal
 */
export const Title = styled.p`
  color:#ffffff;
`;

