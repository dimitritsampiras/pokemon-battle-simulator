import React from 'react';
import styled from 'styled-components';
import { SPECIES } from '../../mechanics/data/species';
import { Pokemon } from '../../mechanics/Pokemon';
import theme from '../../theme/theme';
import { HealthBar } from '../containers/HealthBar';

interface PokemonBarsProps {
  userPokemon: Pokemon;
  oppPokemon: Pokemon;
}

export const PokemonBars: React.FC<PokemonBarsProps> = ({
  userPokemon,
  oppPokemon,
}) => {
  return (
    <Container>
      <HealthBar pokemon={userPokemon}></HealthBar>
      <HealthBar pokemon={oppPokemon}></HealthBar>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 ${theme.spacing[14]}
`;
