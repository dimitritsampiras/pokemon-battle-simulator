// import { Action } from 'redux';
// import { GameState } from '../../mechanics/interface/GameState';
// import { SpeicesName } from '../../mechanics/interface/types';
// import { Pokemon } from '../../mechanics/Pokemon';

// /*****************************************
//  * Updating the game state during battle
//  ******************************************/
// export interface UpdateGameStateAction extends Action<'UPDATE_GAME_STATE'> {
//   type: 'UPDATE_GAME_STATE';
//   payload: GameState;
// }

// export const updateGameState = (payload: GameState): UpdateGameStateAction => {
//   return {
//     type: 'UPDATE_GAME_STATE',
//     payload,
//   };
// };

// /*****************************************
//  * Updating the game state during battle
//  ******************************************/
// export interface GeneratePlayersAction extends Action<'GENERATE_PLAYERS'> {
//   type: 'GENERATE_PLAYERS';
//   payload: {
//     usr: SpeicesName;
//   };
// }

// export const generatePlayers = (payload: {
//   usr: SpeicesName;
// }): GeneratePlayersAction => {
//   return {
//     type: 'GENERATE_PLAYERS',
//     payload,
//   };
// };

// export type GameAction = GeneratePlayersAction | UpdateGameStateAction;
export {}