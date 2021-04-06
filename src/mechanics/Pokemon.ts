/**
 * Pokemon.ts
 *
 * @module Pokemon
 */

import { calculateStats } from './calc/calculateStats';
import { NATURES } from './data/natures';
import { Move } from './interface/Move';
import { Species } from './interface/Species';
import {
  TypeName,
  AbilityName,
  ItemName,
  NatureName,
  StatusName,
  Stats,
} from './interface/types';

/**
 * Pokemon class.
 *
 * @remarks
 * This class is used to create an active pokemon with various added attributes.
 * It is separate from a Species class.
 *
 */
export class Pokemon {
  name: string;
  type: [TypeName] | [TypeName, TypeName];
  stats: Stats;
  activeStats: Stats;
  ability: AbilityName;
  item: ItemName;
  moves: Move[];
  status: StatusName;

  /**
   * Pokemon class constructor.
   * @param species The base species the pokemon comes from.
   * @param ability The ability of the pokemon.
   * @param nature The nature of the pokemon.
   * @param item The item the pokemon is carrying.
   * @param moves The moves that the pokemon has.
   * @param evs The effort values.
   * @param status The status infliction of the pokemon during combat.
   */
  public constructor(
    species: Species,
    ability: AbilityName,
    nature: NatureName,
    item: ItemName,
    moves: Move[],
    evs: Stats,
    status: StatusName
  ) {
    this.name = species.name;
    this.type = species.type;
    this.stats = calculateStats(species.stats, evs, NATURES[nature]);
    this.activeStats = { ...this.stats };
    this.ability = ability;
    this.item = item;
    this.moves = moves;
    this.status = status;
  }
}
