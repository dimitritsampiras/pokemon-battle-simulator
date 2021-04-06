import { selectSpecies } from '../../src/store/actions/selectSpecies.action'

describe('Select Species Action Test', () => {
  test('Should create an action to select a species.', () => {
    const expectedAction = {
      type: 'SELECT_SPECIES',
      speciesName: 'blastoise',
    }
    expect(selectSpecies('blastoise')).toStrictEqual(expectedAction)
  })
})

export {}
