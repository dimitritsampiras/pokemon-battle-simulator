/**
 * Species.ts
 * @module Interface.Species
 */


import { Move } from "./Move";
import { AbilityName, MoveName, TypeName } from "./types";

/**
 * Interface for Species
 * 
 * @remarks
 * Defines the properties types of each Species.
 */
export interface Species {
  readonly name: string;
  readonly type: [TypeName] | [TypeName, TypeName];
  readonly stats: Stats;
  readonly availableMoves: MoveName[];
  readonly abilities: AbilityName[];
  readonly weight: number;
}

interface Stats {
  hp: number;
  atk: number;
  def: number;
  spa: number;
  spd: number;
  spe: number;
}