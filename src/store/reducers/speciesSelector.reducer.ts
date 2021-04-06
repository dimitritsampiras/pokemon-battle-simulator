/**
 * SpeciesSelector.ts
 * @module Reducer.SpeciesSelector
 */

import { SPECIES } from '../../mechanics/data/species';
import { SelectSpeciesAction } from '../actions/selectSpecies.action';
import { Species } from '../../mechanics/interface/Species';

const initialState = SPECIES['blastoise'];

/**
 * Species Selector
 *
 * @remarks
 * This is the redux reducer for changing the user selected pokemon.
 *
 * ```typescript
 * state.selectedSpecies => SPECIES[action.speciesName];
 * ```
 *
 * @param state Global State of the application.
 * @param action The Redux action call.
 * @returns The new state for the application.
 */
export const speciesSelector = (
  state = initialState,
  action: SelectSpeciesAction
): Species => {
  switch (action.type) {
    case 'SELECT_SPECIES':
      return SPECIES[action.speciesName];
    default:
      return state;
  }
};
