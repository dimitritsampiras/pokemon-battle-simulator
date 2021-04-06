import { Nature } from '../interface/types'

export const NATURES: { [nature: string]: Nature } = {
  adamant: ['atk', 'spa'],
  bashful: [undefined, undefined],
  bold: ['def', 'atk'],
  brave: ['atk', 'spe'],
  calm: ['spd', 'atk'],
  careful: ['spd', 'spa'],
  docile: ['def', 'def'],
  gentle: ['spd', 'def'],
  hardy: [undefined, undefined],
  hasty: ['spe', 'def'],
  impish: ['def', 'spa'],
  jolly: ['spe', 'spa'],
  lax: ['def', 'spd'],
  lonely: ['atk', 'def'],
  mild: ['spa', 'def'],
  modest: ['spa', 'atk'],
  naive: ['spe', 'spd'],
  naughty: ['atk', 'spd'],
  quiet: ['spa', 'spe'],
  quirky: [undefined, undefined],
  rash: ['spa', 'spd'],
  relaxed: ['def', 'spe'],
  sassy: ['spd', 'spe'],
  serious: [undefined, undefined],
  timid: ['spe', 'atk'],
}