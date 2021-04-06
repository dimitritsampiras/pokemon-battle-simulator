/**
 * CharacterSelection.tsx
 *
 * @description
 * Tempalate view for battle page.
 *
 * @module View.Battle
 */

import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { damage, multiplier } from '../../mechanics/calc/damage';
import { MOVES } from '../../mechanics/data/moves';
import { SPECIES } from '../../mechanics/data/species';
import { GameState } from '../../mechanics/interface/GameState';
import { Pokemon } from '../../mechanics/Pokemon';
import { AppState } from '../../store';
import {
  genOpponentPokemon,
  genUserPokemon,
  getMoveFromEvent,
  sleep,
} from '../../utils/misc';
import { DivClick } from '../../utils/types';
import { MovesList } from '../sections/MovesList';
import { PokemonBars } from '../sections/PokemonBars';
import { Scene } from '../sections/Scene';
import click from '../../assets/audio/click.mp3';
import useSound from 'use-sound';
import { genRandomMove } from '../../mechanics/ai';

interface BattleProps {}

/**
 * Battle Route Component
 *
 * @remarks
 * Contains global state for battle dequence.
 * Uses [[gameStateUpdater]] to pass down state.
 *
 * @returns React Functional Component
 */
export const Battle: React.FC<BattleProps> = ({}) => {
  // selected speices from redux and character selection
  const selectedSpecies = useSelector(
    (state: AppState) => state.species || SPECIES['blastoise']
  );
  // generate the user's pokemon
  const [userPokemon, setUserPokemon] = useState(
    genUserPokemon(selectedSpecies)
  );
  // generate opponent pokemon
  const [opponentPokemon, setOpponentPokemon] = useState(genOpponentPokemon());

  // game state
  const [gameState, setGameState] = useState<GameState>({
    turn: 'usr' /*determineStartingPokemon();*/,
    stage: 'select',
    gameText: '',
  });
  const [clickAudio] = useSound(click);

  /**
   * Click handler when user cliks a move
   * @param e click event
   */
  const clickMoveHander: DivClick = (e) => {
    // moves are active
    if (
      gameState.turn === 'usr' &&
      gameState.stage !== 'finished' &&
      !gameState.winner
    ) {
      const move = getMoveFromEvent(e);
      clickAudio();

      // on user clicks move
      setTimeout(() => {
        setGameState((previousState) => {
          return {
            ...previousState,
            turn: 'none', //change turn
            stage: 'usingMove',
            usingMove: {
              user: 'usr',
              moveCat: MOVES[move].category === 'status' ? 'status' : 'atk',
            },
            gameText: `${userPokemon.name} used ${MOVES[move].name}`,
          };
        });
        setTimeout(
          () =>
            setGameState((prev) => {
              return { ...prev, usingMove: undefined };
            }),
          250
        );
        // change the pokemon health based on damange
        setTimeout(() => {
          setOpponentPokemon((prev) => {
            return {
              ...prev,
              activeStats: {
                ...prev.activeStats,
                hp:
                  prev.activeStats.hp -
                    damage(userPokemon, MOVES[move], opponentPokemon) >
                  0
                    ? prev.activeStats.hp -
                      damage(userPokemon, MOVES[move], opponentPokemon)
                    : 0,
              },
            };
          });
          /**
           * This setter adds text if there was a modifier
           */
          setTimeout(() => {
            setGameState((previousState) => {
              return {
                ...previousState,
                gameText: '',
              };
            });
            if (multiplier(MOVES[move], opponentPokemon) >= 2)
              setGameState((previousState) => {
                return {
                  ...previousState,
                  gameText: `It was super effective`,
                };
              });
            if (multiplier(MOVES[move], opponentPokemon) < 1)
              setGameState((previousState) => {
                return {
                  ...previousState,
                  gameText: `It was not very effective`,
                };
              });
            setTimeout(() => {
              setGameState((prev) => {
                return { ...prev, gameText: '', turn: 'opp', stage: 'select' };
              });
              console.log(gameState);
            }, 2100);
          }, 2000);
        }, 1000);
      }, 100);

      // cant click on moves while active
    }
  };

  useEffect(() => {
    if (
      gameState.stage === 'select' &&
      gameState.turn === 'opp' &&
      !gameState.winner
    ) {
      let move = genRandomMove(opponentPokemon);
      console.log('hellooooo');

      setGameState((previousState) => {
        return {
          ...previousState,
          usingMove: {
            user: 'opp',
            moveCat: move.category === 'status' ? 'status' : 'atk',
          },
          gameText: `${opponentPokemon.name} used ${move.name}`,
        };
      });
      setTimeout(() => {
        setGameState((prevstate) => {
          return {
            ...prevstate,
            usingMove: undefined,
          };
        });
        setTimeout(() => {
          setUserPokemon((prev) => {
            console.log(damage(userPokemon, move, opponentPokemon));

            return {
              ...prev,
              activeStats: {
                ...prev.activeStats,
                hp:
                  prev.activeStats.hp -
                    damage(userPokemon, move, opponentPokemon) >
                  0
                    ? prev.activeStats.hp -
                      damage(userPokemon, move, opponentPokemon)
                    : 0,
              },
            };
          });
          setTimeout(() => {
            setGameState((previousState) => {
              return {
                ...previousState,
                gameText: '',
              };
            });
            if (multiplier(move, userPokemon) >= 2)
              setGameState((previousState) => {
                return {
                  ...previousState,
                  gameText: `It was super effective`,
                };
              });
            if (multiplier(move, userPokemon) < 1)
              setGameState((previousState) => {
                return {
                  ...previousState,
                  gameText: `It was not very effective`,
                };
              });
            setTimeout(() => {
              setGameState((prev) => {
                return { ...prev, gameText: '', turn: 'usr', stage: 'select' };
              });
              console.log(gameState);
            }, 2100);
          }, 2000);
        }, 1000);
      }, 300);
    }
  }, [gameState.turn]);

  useEffect(() => {
    setTimeout(() => {
      if (userPokemon.activeStats.hp === 0) {
        setGameState((prev) => {
          return {
            ...prev,
            winner: 'opp',
            stage: 'finished',
            gameText: `${userPokemon.name} fainted.`,
          };
        });
        setTimeout(() => {
          setGameState((prev) => {
            return {
              ...prev,
              gameText: `You lose :(`,
            };
          });
        }, 1000);
      } else if (opponentPokemon.activeStats.hp === 0) {
        setGameState((prev) => {
          return {
            ...prev,
            winner: 'usr',
            stage: 'finished',
            gameText: `${opponentPokemon.name} fainted.`,
          };
        });
        setTimeout(() => {
          setGameState((prev) => {
            return {
              ...prev,
              gameText: `You win!`,
            };
          });
        }, 2100);
      }
    }, 2000);
  }, [userPokemon, opponentPokemon]);

  /**
   * Occurs when game state changes (ie. after user clicks on move).
   * Sets game state back to user after 6000 miliseconds.
   */

  return (
    <>
      <PokemonBars userPokemon={userPokemon} oppPokemon={opponentPokemon} />
      <Scene
        userPokemon={userPokemon}
        oppPokemon={opponentPokemon}
        gameState={gameState}
      />
      <MovesList
        moves={userPokemon.moves}
        clickMoveHander={clickMoveHander}
        gameState={gameState}
      />
    </>
  );
};
