import { stat } from 'node:fs';
import { Move } from '../interface/Move';

export const MOVES: { [move: string]: Move } = {
  hurricane: {
    name: 'hurricane',
    type: 'flying',
    category: 'special',
    power: 110,
    accuracy: 100,
    pp: 20,
  },
  dragonBreath: {
    name: 'dragon breath',
    type: 'dragon',
    category: 'special',
    power: 60,
    accuracy: 100,
    pp: 20,
  },
  flamethrower: {
    name: 'flamethrower',
    type: 'fire',
    category: 'special',
    power: 90,
    accuracy: 100,
    pp: 15,
  },
  fireFang: {
    name: 'fire Fang',
    type: 'fire',
    category: 'physical',
    power: 65,
    accuracy: 95,
    pp: 15,
  },
  slash: {
    name: 'slash',
    type: 'normal',
    category: 'physical',
    power: 70,
    accuracy: 100,
    pp: 20,
  },
  thunderPunch: {
    name: 'thunder punch',
    type: 'electric',
    category: 'physical',
    power: 75,
    accuracy: 100,
    pp: 15,
  },
  firePunch: {
    name: 'fire punch',
    type: 'fire',
    category: 'physical',
    power: 75,
    accuracy: 100,
    pp: 15,
  },
  icePunch: {
    name: 'ice punch',
    type: 'ice',
    category: 'physical',
    power: 75,
    accuracy: 100,
    pp: 15,
  },
  wingAttack: {
    name: 'wing attaack',
    type: 'flying',
    category: 'physical',
    power: 60,
    accuracy: 100,
    pp: 35,
  },
  closeCombat: {
    name: 'close combat',
    type: 'fighting',
    category: 'physical',
    power: 120,
    accuracy: 100,
    pp: 5,
  },
  protect: {
    name: 'protect',
    type: 'normal',
    category: 'status',
    pp: 10,
    effect: { protected: true },
  },
  dragonDance: {
    name: 'dragon dance',
    type: 'dragon',
    category: 'status',
    pp: 20,
    effect: {
      changeStats: [
        { stat: 'atk', value: 1 },
        { stat: 'spe', value: 1 },
      ],
    },
  },
  // blastoise moves -------
  hydroPump: {
    name: 'hydro pump',
    type: 'water',
    category: 'special',
    power: 110,
    accuracy: 80,
    pp: 5,
  },
  ironDefense: {
    name: 'iron defense',
    type: 'steel',
    category: 'status',
    pp: 15,
  },
  bite: {
    name: 'bite',
    type: 'dark',
    category: 'physical',
    power: 60,
    accuracy: 100,
    pp: 25,
  },
  iceBeam: {
    name: 'ice beam',
    type: 'ice',
    category: 'special',
    power: 90,
    accuracy: 100,
    pp: 10,
  },
  agility: {
    name: 'agility',
    type: 'psychic',
    category: 'status',
    pp: 30,
    effect: {
      changeStats: [
        {
          stat: 'spe',
          value: 2,
        },
      ],
    },
  },
  thunderShock: {
    name: 'thunder shock',
    type: 'electric',
    power: 40,
    accuracy: 100,
    category: 'special',
    pp: 30,
    effect: {
      changeStatus: {
        status: 'par',
        percentChance: 10,
      },
    },
  },
  //snorlax moves
  tackle: {
    name: 'tackle',
    type: 'normal',
    category: 'physical',
    power: 40,
    accuracy: 100,
    pp: 35,
  },
  screech: {
    name: 'screech',
    type: 'normal',
    category: 'status',
    accuracy: 85,
    pp: 40,
    effect: {
      changeStats: [{ stat: 'def', value: -2 }],
    },
  },
  hammerArm: {
    name: 'hammer arm',
    type: 'fighting',
    category: 'physical',
    power: 100,
    accuracy: 90,
    pp: 10,
    effect: {
      changeStats: [{ stat: 'spe', value: -1 }],
    },
  },

  //venusaur moves
  petalBlizzard: {
    name: 'petal blizzard',
    type: 'grass',
    category: 'physical',
    power: 90,
    accuracy: 100,
    pp: 15,
  },
  vineWhip: {
    name: 'vine whip',
    type: 'grass',
    category: 'physical',
    power: 45,
    accuracy: 100,
    pp: 25,
  },
  seedBomb: {
    name: 'seed bomb',
    type: 'grass',
    category: 'physical',
    power: 80,
    accuracy: 100,
    pp: 15,
  },
  growl: {
    name: 'growl',
    type: 'normal',
    category: 'status',
    accuracy: 100,
    pp: 40,
    effect: {
      changeStats: [{ stat: 'atk', value: -1 }],
    },
  },

  // pikachu uses thunder shock
  // pikachu moves
  charm: {
    name: 'charm',
    type: 'normal',
    category: 'status',
    accuracy: 100,
    pp: 20,
    effect: {
      changeStats: [{ stat: 'atk', value: 2 }],
    },
  },

  slam: {
    name: 'slam',
    type: 'normal',
    category: 'physical',
    power: 80,
    accuracy: 75,
    pp: 20,
  },

  discharge: {
    name: 'discharge',
    type: 'electric',
    category: 'special',
    power: 80,
    accuracy: 100,
    pp: 15,
    effect: {
      changeStatus: {
        status: 'par',
        percentChance: 30,
      },
    },
  },

  tailWhip: {
    name: 'tail whip',
    type: 'normal',
    category: 'status',
    accuracy: 100,
    pp: 20,
    effect: {
      changeStats: [{ stat: 'def', value: 1 }],
    },
  },

  //Gengar moves

  lick: {
    name: 'lick',
    type: 'ghost',
    category: 'physical',
    power: 30,
    accuracy: 100,
    pp: 30,
    effect: {
      changeStatus: {
        status: 'par',
        percentChance: 30,
      },
    },
  },

  suckerPunch: {
    name: 'sucker punch',
    type: 'dark',
    category: 'physical',
    power: 70,
    accuracy: 100,
    pp: 5,
  },

  hypnosis: {
    name: 'hypnosis',
    type: 'psychic',
    category: 'status',
    accuracy: 60,
    pp: 20,
    effect: {
      changeStatus: {
        status: 'slp',
        percentChance: 100,
      },
    },
  },

  smog: {
    name: 'smog',
    type: 'poison',
    category: 'special',
    power: 30,
    accuracy: 70,
    pp: 20,
    effect: {
      changeStatus: {
        status: 'psn',
        percentChance: 40,
      },
    },
  },
};
