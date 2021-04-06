/**
 * stats.ts
 * @description
 * Module for calculating the stats of a pokemon.
 * Full formulas can be found here:
 * https://bulbapedia.bulbagarden.net/wiki/Stat
 * @module Calculations.Stats
 */

import { Nature, StatNameNoHp, StatName, Stats } from '../interface/types';

/**
 * Calculates the new stat. Not including hp.
 * @param b Base Stat
 * @param e Ev (Effort Value) for stat
 * @param nature Pokemon's nature
 * @param stat Stat name
 * @return Numeric value of new stat
 */
export function statNoHpCalc(
  b: number,
  e: number,
  nature: Nature,
  stat: StatNameNoHp
): number {
  let n = 1;
  if (nature[0] === stat) n = 1.1;
  if (nature[1] === stat) n = 0.9;
  return Math.floor(
    Math.floor(((2 * b + Math.floor(e / 4)) * 100) / 100 + 5) * n
  );
}

/**
 * Calculates the new hp value.
 * @param b Base stat
 * @param e Ev (Effort value) of hp
 */
export function statHpCalc(b: number, e: number): number {
  return Math.floor(((2 * b + Math.floor(e / 4)) * 100) / 100 + 100 + 10);
}

/**
 *
 * @param stats All base stats.
 * @param evs Effort Value of all stats.
 * @param nature
 */
export function calculateStats(
  stats: Stats,
  evs: Stats,
  nature: Nature
): Stats {
  const newStats: Stats = {} as Stats;
  for (const stat in stats) {
    const index: StatName = stat as StatName;
    if (stat == 'hp') newStats[index] = statHpCalc(stats[index], evs[index]);
    else
      newStats[index] = statNoHpCalc(
        stats[index],
        evs[index],
        nature,
        stat as StatNameNoHp
      );
  }
  return newStats;
}
