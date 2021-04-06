export function formatStatName(stat: string) {
  switch (stat) {
    case 'hp':
      return 'Hp';
    case 'atk':
      return 'Attack';
    case 'def':
      return 'Defense';
    case 'spa':
      return 'Sp. Atk';
    case 'spd':
      return 'Sp. Def';
    case 'spe':
      return 'Speed';
  }
  return 'not sure how to handle this'
}
