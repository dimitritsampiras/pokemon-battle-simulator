import colors from '../theme/colors'
import { TypeName } from '../mechanics/interface/types'

/**
 * Determines the color needed based on a pokemon type.
 *
 * @param type Name of the pokemon type
 * @param hasOpacity Whether or not the color is opaque
 * @returns A hex color.
 */
export function colorPicker(type: TypeName, hasOpacity?: boolean): string {

  const colorsTypes: { [name: string]: { [value: number]: string } } = {
    water: colors.blue,
    fire: colors.red,
    electric: colors.yellow,
    grass: colors.green,
    dragon: colors.indigo,
    ghost: colors.violet,
    fighting: colors.brown,
    normal: colors.coolGray,
    flying: colors.blueGray,
    poison: colors.purple,
    dark: colors.blueGray,
    steel: colors.warmGray,
    ice: colors.lightBlue,
    psychic: colors.fuchsia
  }

  return !hasOpacity ? colorsTypes[type][500] : colorsTypes[type][100]
}
