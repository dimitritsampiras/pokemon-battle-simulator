import { Move } from './interface/Move';
import { Pokemon } from './Pokemon';

export function genRandomMove(pokemon: Pokemon) {
  let possibleMoves = pokemon.moves.filter(
    (move) => move.category !== 'status'
  );
  return possibleMoves[Math.floor(Math.random() * possibleMoves.length)];
}