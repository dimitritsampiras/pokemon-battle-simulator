import React from 'react'
import { StatBar } from '../atoms/StatBar'
import { formatStatName } from '../../utils/formatStatName'
import { SPECIES } from '../../mechanics/data/species'
import { Species } from '../../mechanics/interface/Species'

interface StatsListProps {
  selectedSpecies: Species
}

/**
 * Stat list component.
 *
 * @param selectedSpecies Species that has been selected by user.
 * @returns List of Stats of species
 */
export const StatsList: React.FC<StatsListProps> = ({ selectedSpecies }) => {
  return (
    <>
      {Object.entries(selectedSpecies.stats).map(([stat, value], key) => (
        <StatBar
          stat={formatStatName(stat)}
          value={value}
          key={key}
          type={selectedSpecies.type}
        />
      ))}
    </>
  )
}
