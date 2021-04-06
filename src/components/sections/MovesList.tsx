import React from 'react';
import styled, { css } from 'styled-components';
import { GameState } from '../../mechanics/interface/GameState';
import { Move as IMove } from '../../mechanics/interface/Move';
import { TypeName } from '../../mechanics/interface/types';
import theme from '../../theme/theme';
import { colorPicker } from '../../utils/colorPicker';
import { DivClick } from '../../utils/types';

interface MovesListProps {
  moves: IMove[];
  gameState: GameState;
  clickMoveHander: DivClick;
}

export const MovesList: React.FC<MovesListProps> = ({
  moves,
  clickMoveHander,
  gameState,
}) => {
  
  return (
    <Container>
      {moves.map((move, key) => (
        <StyledContainer
          key={key}
          type={move.type}
          gameState={gameState}
          onClick={(e) => clickMoveHander(e)}
          className={move.name}
        >
          <StyledTopArea>
            <MoveName gameState={gameState}>{move.name}</MoveName>
            <Type type={move.type} gameState={gameState}>
              {move.type}
            </Type>
          </StyledTopArea>
          <StyledInfoArea>
            {/* power */}
            <ValueLabelWrapper>
              <Value turn={gameState.turn}>{move.power || '--'}</Value>
              <Label turn={gameState.turn}>power</Label>
            </ValueLabelWrapper>
            <ValueLabelWrapper>
              <Value turn={gameState.turn}>{move.pp}</Value>
              <Label turn={gameState.turn}>pp</Label>
            </ValueLabelWrapper>
          </StyledInfoArea>
        </StyledContainer>
      ))}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-around;
`;

const StyledContainer = styled.div<{ type: TypeName; gameState: GameState }>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100px;
  width: 260px;
  padding: ${({ theme }) => theme.spacing['4']};
  background-color: ${({ gameState }) =>
    gameState.turn === 'usr' ? 'white' : theme.colors.gray[100]};
  border: 1px solid ${({ theme }) => theme.colors.coolGray[100]};
  border-radius: ${({ theme }) => theme.borderRadius['2xl']};
  z-index: 999;
  transition: all 200ms ease-in-out;

  ${({ gameState }) =>
    gameState.turn === 'usr'
      ? css<{ type: TypeName }>`
          :hover {
            cursor: pointer;
            transform: scale(1.02);
            border: none;
            background-color: ${({ type }) => colorPicker(type, true)};
            z-index: 999;
            border: 1px solid ${({ theme }) => theme.colors.coolGray[100]};
          }
        `
      : css``}
`;

const StyledTopArea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: -1;
`;

const StyledInfoArea = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  z-index: -1;
`;

const MoveName = styled.h1<{ gameState: GameState }>`
  font-size: ${({ theme }) => theme.fontSize['lg']};
  text-transform: capitalize;
  z-index: -1;
  ${({ gameState }) =>
    gameState.turn !== 'usr'
      ? css`
          color: ${({ theme }) => theme.colors.gray[300]};
        `
      : css``}
`;

const Type = styled.div<{ type: TypeName; gameState: GameState }>`
  padding: 4px 13px;
  margin: 0;
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 2px;
  text-transform: uppercase;
  border-radius: 100px;
  color: ${({ type, gameState }) =>
    gameState.turn === 'usr' ? colorPicker(type) : theme.colors.gray[400]};
  background-color: ${({ type, gameState }) =>
    gameState.turn === 'usr'
      ? colorPicker(type, true)
      : theme.colors.gray[100]};
  z-index: -1;
`;

const ValueLabelWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  margin-right: ${({ theme }) => theme.spacing['6']};
  z-index: -1;
`;

const Value = styled.h3<GameState>`
  color: ${({ theme, turn }) =>
    turn === 'usr' ? theme.colors.coolGray[600] : theme.colors.gray[300]};
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
  margin-right: 5px;
  z-index: -1;
`;

const Label = styled.span<GameState>`
  color: ${({ theme, turn }) =>
    turn === 'usr' ? theme.colors.coolGray[600] : theme.colors.gray[300]};
  font-weight: ${({ theme }) => theme.fontWeight.normal};
  font-size: ${({ theme }) => theme.fontSize.xs};
  z-index: -1;
`;
