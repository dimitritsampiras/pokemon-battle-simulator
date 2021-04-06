import React from 'react';
import styled, { css } from 'styled-components';
import img from '../../assets/images/background-hero.png';
import { GameState } from '../../mechanics/interface/GameState';
import { Pokemon } from '../../mechanics/Pokemon';
import { imageSwitcher } from '../../utils/imageSwitcher';

interface SceneProps {
  userPokemon: Pokemon;
  oppPokemon: Pokemon;
  gameState: GameState;
}

export const Scene: React.FC<SceneProps> = ({
  userPokemon,
  oppPokemon,
  gameState,
}) => {
  return (
    <StyledContainer>
      <UserSpite
        src={imageSwitcher(userPokemon.name, 'battle', 'back')}
        {...gameState}
      ></UserSpite>
      <OppSprite
        src={imageSwitcher(oppPokemon.name, 'battle', 'front')}
        {...gameState}
      ></OppSprite>
      {gameState.gameText === '' ? (
        <></>
      ) : (
        <TextBox>
          <GameText>{gameState.gameText}</GameText>
        </TextBox>
      )}
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  height: 350px;
  width: 100%;
  background-image: url(${img});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border: 1px solid ${({ theme }) => theme.colors.coolGray[100]};
  border-radius: ${({ theme }) => theme.borderRadius['3xl']};
  margin: 50px 0;
  padding: 0 100px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  position: relative;
`;

const TextBox = styled.div`
  position: absolute;
  bottom: 0px;
  width: 100%;
  height: 60px;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0 0 1.5rem 1.5rem;
`;

const GameText = styled.p`
  margin: 0;
  color: white;
  white-space: nowrap;
  overflow: hidden;
  width: 100%;
  text-align: center;
  animation: type 5s steps(90, end);

  @keyframes type {
    from {
      width: 0;
    }
  }
`;

const Sprite = styled.img`
  height: 110px;
  transition: all 0.2s ease-out;
  -webkit-user-drag: none;
  user-select: none;
`;

const UserSpite = styled(Sprite)<GameState>`
  transform: translateY(30px)
    ${({ usingMove }) => {
      if (usingMove && usingMove.user === 'usr')
        if (usingMove.moveCat === 'atk') return 'translate(70px, -5px)';
        else if (usingMove.moveCat === 'status') return 'translateY(-10px)';
        else return '';
    }};
`;

const OppSprite = styled(Sprite)<GameState>`
  transform: translateY(-10px)
    ${({ usingMove }) => {
      if (usingMove && usingMove.user === 'opp')
        if (usingMove.moveCat === 'atk') return 'translate(-40px, 5px)';
        else if (usingMove.moveCat === 'status') return 'translateY(-10px)';
        else return '';
    }};
  display: ${({ winner }) => (winner === 'usr' ? 'none' : '')};
`;
