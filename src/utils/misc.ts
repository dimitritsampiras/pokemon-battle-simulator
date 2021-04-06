import { MOVES } from '../mechanics/data/moves';
import { SPECIES } from '../mechanics/data/species';
import { Move } from '../mechanics/interface/Move';
import { Species } from '../mechanics/interface/Species';
import { Pokemon } from '../mechanics/Pokemon';

export function genUserPokemon(selectedSpecies: Species) {
  return new Pokemon(
    selectedSpecies,
    'blaze',
    'adamant',
    'leftovers',
    genMoves(selectedSpecies),
    {
      hp: 0,
      atk: 0,
      def: 0,
      spa: 0,
      spd: 0,
      spe: 0,
    },
    'hty'
  );
}

export function genOpponentPokemon() {
  let oppSpecies = randomSpecies(SPECIES);
  return new Pokemon(
    oppSpecies,
    'blaze',
    'adamant',
    'leftovers',
    genMoves(oppSpecies),
    {
      hp: 0,
      atk: 0,
      def: 0,
      spa: 0,
      spd: 0,
      spe: 0,
    },
    'hty'
  );
}

export function getMoveFromEvent(
  e: React.MouseEvent<HTMLDivElement, MouseEvent>
) {
  const [, , first, last] = e.currentTarget.className.split(' ');
  return last ? first + last.charAt(0).toUpperCase() + last.slice(1) : first;
}

export async function sleep(milliseconds: number) {
  console.log('sleep start');
  await new Promise((resolve) => setTimeout(resolve, milliseconds));
  console.log('sleep done');
}

function randomSpecies(data: { [species: string]: Species }): Species {
  var keys = Object.keys(data);
  return data[keys[(keys.length * Math.random()) << 0]];
}

function genMoves(species: Species): Move[] {
  return species.availableMoves.map((move) => MOVES[move]);
}

console.log('random', randomSpecies(SPECIES));
