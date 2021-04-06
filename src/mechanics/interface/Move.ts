/**
 * Move.ts
 * @module Interface.Move
 */

import { MoveCategory, StatName, StatusName, TypeName } from './types';

/**
 * Interface for Move
 *
 * @remarks
 * Defines the properties types of each Move.
 */
export interface Move {
  name: string;
  type: TypeName;
  category: MoveCategory;
  power?: number;
  accuracy?: number;
  pp: number;
  effect?: Effect;
}

interface Effect {
  protected?: boolean;
  changeStats?: {
    stat: StatName;
    value: -2 | -1 | 1 | 2;
  }[];
  changeStatus?: {
    status: StatusName;
    percentChance: number;
  };
}
