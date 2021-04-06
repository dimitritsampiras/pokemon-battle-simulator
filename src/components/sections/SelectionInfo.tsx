/**
 * Section for Info on Selected Character
 *
 * @remarks
 * Main area for information on selected species
 */

import React from 'react'
import styled, { css } from 'styled-components'
import { Species } from '../../mechanics/interface/Species'
import { DisplayName } from '../atoms/DisplayName'
import { Sprite } from '../atoms/Sprite'
import { InfoList } from '../containers/InfoList'
import { StatsList } from '../containers/StatsList'

interface SelectionInfoProps {
  selectedSpecies: Species
}

export const SelectionInfo: React.FC<SelectionInfoProps> = ({
  selectedSpecies,
}) => {
  return (
    <StyledOuterContainer className="main-area">
      {/* Flex item 1 */}
      <StyledInfoWrapper>
        <DisplayName name={selectedSpecies.name} />
        <InfoList selectedSpecies={selectedSpecies} />
        <StyledHR />
        <StatsList selectedSpecies={selectedSpecies} />
      </StyledInfoWrapper>

      {/* Flex item 1 */}
      <Sprite name={selectedSpecies.name} />
    </StyledOuterContainer>
  )
}

/**
 * Outer container for main area
 * Does not restrict height.
 */
const StyledOuterContainer = styled.div`
  width: 100%;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`

const StyledInfoWrapper = styled.div`` // No styles. Just needed for empty div.

const StyledHR = styled.hr`
  ${(props) => css`
    margin: 25px 0 30px;
    width: 100%;
    color: ${props.theme.colors.coolGray[100]};
    border: 1px solid ${props.theme.colors.coolGray[100]};
  `}
`
