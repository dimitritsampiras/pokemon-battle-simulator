/**
 * Test driver for Calculate Stats
 * @file calculateStats.test.ts
 * @author Dimitri Tsampiras
 * @since 1.0.0
 */

import {
  calculateStats,
  statHpCalc,
  statNoHpCalc,
} from '../../src/mechanics/calc/calculateStats';
import { NATURES } from '../../src/mechanics/data/natures';
import { Nature, Stats } from '../../src/mechanics/interface/types';

const baseStats: Stats = {
  hp: 80,
  atk: 82,
  def: 83,
  spa: 100,
  spd: 100,
  spe: 80,
};
const baseEvs: Stats = {
  hp: 0,
  atk: 0,
  def: 0,
  spa: 0,
  spd: 0,
  spe: 0,
};

test('Single HP stat calulation.', () => {
  expect(statHpCalc(80, 0)).toBe(270);
  expect(statHpCalc(78, 0)).toBe(266);
});

test('Single stat calulation.', () => {
  expect(statNoHpCalc(82, 0, NATURES['hardy'], 'atk')).toBe(169);
  expect(statNoHpCalc(83, 252, NATURES['adamant'], 'def')).toBe(234);
});

test('New stats off base stats. Case 1', () => {
  const nature: Nature = NATURES['hardy'];
  expect(calculateStats(baseStats, baseEvs, nature)).toEqual({
    hp: 270,
    atk: 169,
    def: 171,
    spa: 205,
    spd: 205,
    spe: 165,
  });
});

test('New stats off base stats. Case 2', () => {
  const evs: Stats = baseEvs;
  evs['hp'] = 252;
  evs['def'] = 252;
  evs['spd'] = 4;
  const nature: Nature = NATURES['brave'];
  expect(calculateStats(baseStats, evs, nature)).toEqual({
    hp: 333,
    atk: 185,
    def: 234,
    spa: 205,
    spd: 206,
    spe: 148,
  });
});

test('New stats off base stats. Case 3', () => {
  const evs: Stats = baseEvs;
  evs['hp'] = 85;
  evs['atk'] = 85;
  evs['def'] = 85;
  evs['spa'] = 85;
  evs['spd'] = 85;
  evs['spe'] = 85;
  const nature: Nature = NATURES['careful'];
  expect(calculateStats(baseStats, evs, nature)).toEqual({
    hp: 291,
    atk: 190,
    def: 192,
    spa: 203,
    spd: 248,
    spe: 186,
  });
});
