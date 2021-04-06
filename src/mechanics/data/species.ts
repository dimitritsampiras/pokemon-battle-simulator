import { Species } from '../interface/Species';

export const SPECIES: { [species: string]: Species } = {
  pikachu: {
    name: 'Pikachu',
    type: ['electric'],
    stats: { hp: 35, atk: 55, def: 40, spa: 50, spd: 50, spe: 90 },
    abilities: ['static', 'lightning rod'],
    availableMoves: ['charm', 'slam', 'discharge', 'thunderShock'],
    weight: 6,
  },
  venusaur: {
    name: 'Venusaur',
    type: ['grass', 'poison'],
    stats: { hp: 80, atk: 82, def: 83, spa: 100, spd: 100, spe: 80 },
    abilities: ['overgrow', 'chlorophyll'],
    availableMoves: ['petalBlizzard', 'vineWhip', 'seedBomb', 'growl'],
    weight: 100,
  },
  charizard: {
    name: 'Charizard',
    type: ['fire', 'flying'],
    stats: { hp: 78, atk: 84, def: 78, spa: 109, spd: 85, spe: 100 },
    abilities: ['blaze', 'solar power'],
    availableMoves: ['dragonBreath', 'flamethrower', 'fireFang', 'slash'],
    weight: 90.5,
  },
  blastoise: {
    name: 'Blastoise',
    type: ['water'],
    stats: { hp: 79, atk: 83, def: 100, spa: 85, spd: 105, spe: 78 },
    abilities: ['torrent', 'rain dish'],
    availableMoves: ['hydroPump', 'iceBeam', 'bite', 'ironDefense'],
    weight: 85.5,
  },
  snorlax: {
    name: 'Snorlax',
    type: ['normal'],
    stats: { hp: 160, atk: 110, def: 65, spa: 65, spd: 110, spe: 30 },
    abilities: ['immunity', 'thick fat', 'gluttony'],
    availableMoves: ['tackle', 'screech', 'hammerArm', 'closeCombat'],
    weight: 460,
  },
  gengar: {
    name: 'Gengar',
    type: ['ghost', 'poison'],
    stats: { hp: 60, atk: 65, def: 60, spa: 130, spd: 75, spe: 110 },
    abilities: ['cursed body'],
    availableMoves: ['lick', 'suckerPunch', 'smog', 'hypnosis'],
    weight: 40.5,
  },
  hitmonchan: {
    name: 'Hitmonchan',
    type: ['fighting'],
    stats: { hp: 50, atk: 105, def: 79, spa: 35, spd: 110, spe: 76 },
    abilities: ['keen Eye', 'iron Fist', 'inner Focus'],
    availableMoves: ['thunderPunch', 'fireFang', 'icePunch', 'closeCombat'],
    weight: 50.2,
  },
  dragonite: {
    name: 'Dragonite',
    type: ['dragon', 'flying'],
    stats: { hp: 91, atk: 134, def: 95, spa: 100, spd: 100, spe: 80 },
    abilities: ['inner focus', 'multiscale'],
    availableMoves: ['dragonDance', 'dragonBreath', 'hurricane', 'iceBeam'],
    weight: 210,
  },
};
