import React from 'react'
import styled from 'styled-components'
import { SpeciesButton } from '../atoms/SpeciesButton'
import { SPECIES } from '../../mechanics/data/species'

/**
 * List of Pokemon Species to display on screen.
 */
const speciesDisplayList = [
  'charizard',
  'blastoise',
  'pikachu',
  'venusaur',
  'gengar',
  'snorlax',
  'hitmonchan',
  'dragonite',
]

interface SelectionListProps {
  selectedSpeciesName: string
}

export const SelectionList: React.FC<SelectionListProps> = ({
  selectedSpeciesName,
}) => {
  return (
    <StyledContainer>
      <StyledInnerWrapper>
        {speciesDisplayList.map((species, key) => (
          <SpeciesButton
            species={SPECIES[species]}
            key={key}
            isActive={selectedSpeciesName === species}
          />
        ))}
      </StyledInnerWrapper>
    </StyledContainer>
  )
}

const StyledContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-content: center;
`

const StyledInnerWrapper = styled.div`
  width: 90%;
  max-width: 1400px;
  display: flex;
  justify-content: space-around;
  align-content: center;
  flex-wrap: wrap;
`
