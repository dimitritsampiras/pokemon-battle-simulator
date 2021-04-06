/**
 * types.ts
 *
 * @module Types
 */

export type TypeEffectiveness = 0 | 0.5 | 1 | 2;

export type StatNameNoHp = 'atk' | 'def' | 'spa' | 'spd' | 'spe';

export type StatName = 'hp' | StatNameNoHp;

export type Stats<T = number> = { [stat in StatName]: T };

export type StatusName = 'slp' | 'psn' | 'brn' | 'frz' | 'par' | 'tox' | 'hty';

export type Weather = 'sand' | 'sun' | 'rain' | 'hail' | 'none';

export type MoveCategory = 'physical' | 'special' | 'status';

export interface Nature extends Array<StatNameNoHp | undefined> {
  0: StatNameNoHp | undefined;
  1: StatNameNoHp | undefined;
}

export type TypeName =
  | 'normal'
  | 'fighting'
  | 'flying'
  | 'poison'
  | 'ground'
  | 'rock'
  | 'bug'
  | 'ghost'
  | 'steel'
  | 'fire'
  | 'water'
  | 'grass'
  | 'electric'
  | 'psychic'
  | 'ice'
  | 'dragon'
  | 'dark';

export type SpeicesName =
  | 'charizard'
  | 'blastoise'
  | 'pikachu'
  | 'venusaur'
  | 'gengar'
  | 'snorlax'
  | 'hitmonchan'
  | 'dragonite';

export type AbilityName =
  | 'anger point'
  | 'blaze'
  | 'chlorophyll'
  | 'cursed body'
  | 'cute charm'
  | 'flash fire'
  | 'gluttony'
  | 'hydration'
  | 'immunity'
  | 'inner Focus'
  | 'inner focus'
  | 'inner focus'
  | 'intimidate'
  | 'intimidate'
  | 'iron Fist'
  | 'justified'
  | 'keen Eye'
  | 'lightning rod'
  | 'lightning rod'
  | 'magic guard'
  | 'multiscale'
  | 'overgrow'
  | 'rain dish'
  | 'reckless'
  | 'rock head'
  | 'sheer force'
  | 'shell Armor'
  | 'solar power'
  | 'static'
  | 'steadfast'
  | 'swarm'
  | 'synchronize'
  | 'technician'
  | 'thick fat'
  | 'torrent'
  | 'water absorb';

export type NatureName =
  | 'adamant'
  | 'bashful'
  | 'bold'
  | 'brave'
  | 'calm'
  | 'careful'
  | 'docile'
  | 'gentle'
  | 'hardy'
  | 'hasty'
  | 'impish'
  | 'jolly'
  | 'lax'
  | 'lonely'
  | 'mild'
  | 'modest'
  | 'naive'
  | 'naughty'
  | 'quiet'
  | 'quirky'
  | 'rash'
  | 'relaxed'
  | 'sassy'
  | 'serious'
  | 'timid';

export type ItemName =
  | 'black belt'
  | 'black glasses'
  | 'bright powder'
  | 'charcoal'
  | 'choice band'
  | 'dragon fang'
  | 'energy powder'
  | 'focus band'
  | 'hard stone'
  | 'kings rock'
  | 'heavy ball'
  | 'ice berry'
  | "king's rock"
  | 'leftovers'
  | 'magnet'
  | 'metal coat'
  | 'miracle seed'
  | 'mystic water'
  | 'never-melt ice'
  | 'poison barb'
  | 'quick claw'
  | 'scope lens'
  | 'sharp beak'
  | 'soft sand'
  | 'spell tag'
  | 'twisted spoon';

export type MoveName =
  | 'dragonBreath'
  | 'flamethrower'
  | 'fireFang'
  | 'slash'
  | 'thunderPunch'
  | 'firePunch'
  | 'icePunch'
  | 'closeCombat'
  | 'wingAttack'
  | 'protect'
  | 'dragonDance'
  | 'hydroPump'
  | 'ironDefense'
  | 'bite'
  | 'iceBeam'
  | 'agility'
  | 'thunderShock'
  | 'tackle'
  | 'screech'
  | 'hammerArm'
  | 'highHorsepower'
  | 'petalBlizzard'
  | 'vineWhip'
  | 'seedBomb'
  | 'growl'
  | 'charm'
  | 'slam'
  | 'discharge'
  | 'tailWhip'
  | 'lick'
  | 'suckerPunch'
  | 'hypnosis'
  | 'hurricane'
  | 'smog';
