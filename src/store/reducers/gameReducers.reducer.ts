// /**
//  * SpeciesSelector.ts
//  * @module Reducer.GameStateUpdater
//  */

// import { Move } from '../../components/atoms/Move';
// import { SPECIES } from '../../mechanics/data/species';
// import { MOVES } from '../../mechanics/data/moves';
// import { GameState } from '../../mechanics/interface/GameState';
// import { Pokemon } from '../../mechanics/Pokemon';
// import {
//   GameAction,
//   UpdateGameStateAction,
// } from '../actions/gameActions.action';

// const initialGameState: GameState = {
//   turn: 'usr', // for now
//   turnNum: 1,
//   field: {
//     weather: 'none',
//     usrModifiers: {
//       protected: false,
//       leechSeed: false,
//       foresight: false,
//     },
//     oppModifiers: {
//       protected: false,
//       leechSeed: false,
//       foresight: false,
//     },
//   },
// };

// /**
//  * Species Selector
//  *
//  * @remarks
//  * This is the redux reducer for changing the user selected pokemon.
//  *
//  * ```typescript
//  * state.gameState => gameState;
//  * ```
//  *
//  * @param state Global State of the application.
//  * @param action The Redux action call.
//  * @returns The new state for the application.
//  */
// export const gameStateUpdater = (
//   state = initialGameState,
//   action: GameAction
// ): GameState => {
//   switch (action.type) {
//     case 'GENERATE_PLAYERS':
//       const userSelected = SPECIES[action.payload.usr];
//       return {
//         ...state,
//         players: {
//           usr: new Pokemon(
//             userSelected,
//             'blaze',
//             'adamant',
//             'leftovers',
//             [MOVES.iceBeam, MOVES.bite, MOVES.ironDefense, MOVES.hydroPump],
//             {
//               hp: 0,
//               atk: 0,
//               def: 0,
//               spa: 0,
//               spd: 0,
//               spe: 0,
//             },
//             'hty'
//           ),
//           opp: new Pokemon(
//             SPECIES['charizard'],
//             'blaze',
//             'adamant',
//             'leftovers',
//             [MOVES.iceBeam, MOVES.bite, MOVES.ironDefense, MOVES.hydroPump],
//             {
//               hp: 0,
//               atk: 0,
//               def: 0,
//               spa: 0,
//               spd: 0,
//               spe: 0,
//             },
//             'hty'
//           ),
//         },
//       };

//     default:
//       break;
//   }

//   return {
//     ...initialGameState,
//   };
// };
export {};
