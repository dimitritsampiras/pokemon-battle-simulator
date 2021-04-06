import { SPECIES } from '../../src/mechanics/data/species';
import { selectSpecies } from '../../src/store/actions/selectSpecies.action';
import {speciesSelector} from '../../src/store/reducers/speciesSelector.reducer'

describe('Species Selector Test', () => {
  test('Should be Blastoise', () => {
    const expectedState = SPECIES['blastoise'];
    expect(speciesSelector(undefined, selectSpecies('blastoise'))).toEqual(
      expectedState
    );
  });

  test('Should be Charizard', () => {
    const initialState = SPECIES['blastoise'];
    const expectedState = SPECIES['charizard'];
    expect(speciesSelector(initialState, selectSpecies('charizard'))).toEqual(
      expectedState
    );
  });
});

export {};
