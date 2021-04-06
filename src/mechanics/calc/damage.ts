/**
 * damage.ts
 * @description
 * Module for damange Calculations
 * Full formulas can be found here:
 * https://bulbapedia.bulbagarden.net/wiki/Damage
 * @module Calculations.Damage
 */

import { TYPECHART } from '../data/typeChart';
import { Move } from '../interface/Move';
import { TypeEffectiveness, Weather } from '../interface/types';
import { Pokemon } from '../Pokemon';

/**
 * Function that determines the damange output of a move.
 *
 * @remarks
 * This function is a pure function that calculates the damange value. Does not
 * modify state.
 *
 * @param attacker Pokemon using the move.
 * @param move Move being used.
 * @param target Target of attack.
 */
export function damage(attacker: Pokemon, move: Move, target: Pokemon): number {
  if (move.category === 'status') return 0;
  const A =
    move.category === 'physical' ? attacker.stats.atk : attacker.stats.spa;
  const D =
    move.category === 'physical' ? target.stats.def : attacker.stats.spd;
  return Math.round(
    ((42 * (move.power || 0) * (A / D)) / 50 + 2) *
      modifier(attacker, target, move)
  );
}

/**
 * Determines multiplier value of move on a target.
 * @param move Move being used.
 * @param target Target Pokemon.
 * @return value of Multiplier.
 */
export function multiplier(move: Move, target: Pokemon): number {
  let m1: TypeEffectiveness | undefined = TYPECHART[move.type][target.type[0]];
  let m2: TypeEffectiveness | undefined =
    TYPECHART[move.type][target.type[1] || '???'];
  if (m1 === undefined) m1 = 1;
  if (m2 === undefined) m2 = 1;
  return m1 * m2;
}

/**
 * Function that determines type modifier
 *
 * @remarks
 * Helper function for damage.
 *
 *
 * @param attacker Attacking Pokemon.
 * @param target Target Pokemon.
 * @param move Move being used.
 * @returns Move modifier.
 */
function modifier(attacker: Pokemon, target: Pokemon, move: Move): number {
  const weather = weatherModifier(move);
  let critical = chance(6.25) ? 1 : 1; //switch back to 1.5 for crit
  let stab = sameTypeAttackBonus(attacker, move);
  let random = Number.parseFloat(
    (Math.random() * (1 - 0.85) + 0.85).toFixed(2)
  );
  let burned =
    attacker.status == 'brn' && move.category == 'physical' ? 0.5 : 1;
  let typeMul = multiplier(move, target);
  return Number(
    (weather * critical * random * stab * burned * typeMul).toFixed(2)
  );
}

/**
 * Returns the weather modifier bonus.
 * @param move Used move.
 * @returns
 */
function weatherModifier(move: Move, weather?: Weather) {
  const { type } = move;
  switch (weather) {
    case 'sun':
      if (type === 'fire') return 1.5;
      if (type === 'water') return 0.5;
      break;
    case 'rain':
      if (type === 'fire') return 0.5;
      if (type === 'water') return 1.5;
      break;
  }
  return 1;
}

/**
 * Function that calculates the Same Type Attack Bonus
 * @param user Attacking Pokemon.
 * @param move Move being used.
 * @returns 1.5 is move's type matches any of the users type. 1 otherwise.
 */
function sameTypeAttackBonus(user: Pokemon, move: Move): number {
  if (user.type.some((type) => type === move.type)) return 1.5;
  return 1;
}

/**
 * Function for a percent chance.
 * @param percent Value of percent.
 * @return Boolean based on the percent.
 */
export function chance(percent: number) {
  return Math.ceil(Math.random() * 100) > 100 - percent;
}
