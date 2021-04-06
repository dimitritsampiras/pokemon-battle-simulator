/**
 * GameStat.ts
 * @module Interface.GameState
 */

import { Pokemon } from '../Pokemon';
import { Weather } from './types';

/**
 * Game State Interface
 *
 * @remarks
 * Global state of the game. Responsible for keeping track
 * of turns and state of the playing field.
 */
export interface GameState {
  turn: 'usr' | 'opp' | 'none';
  stage?: 'select' | 'usingMove' | 'finished';
  winner?: 'usr' | 'opp';
  usingMove?: {
    user: 'usr' | 'opp';
    moveCat: 'atk' | 'status';
  };
  gameText?: string;
}

interface FieldModifiers {
  protected: boolean;
  leechSeed: boolean;
  foresight: boolean;
}

interface Field {
  weather: Weather;
  usrModifiers: FieldModifiers;
  oppModifiers: FieldModifiers;
}

interface Players {
  usr: Pokemon;
  opp: Pokemon;
}
