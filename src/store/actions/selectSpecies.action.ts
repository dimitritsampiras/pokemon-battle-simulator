import { Action } from 'redux';

export interface SelectSpeciesAction extends Action<'SELECT_SPECIES'> {
  type: 'SELECT_SPECIES';
  speciesName: string;
}

export const selectSpecies = (speciesName: string): SelectSpeciesAction => {
  return {
    type: 'SELECT_SPECIES',
    speciesName
  };
};
