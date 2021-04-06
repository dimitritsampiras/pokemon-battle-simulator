/**
 * CharacterSelection.tsx
 *
 * @description
 * Tempalte view for character selection page.
 *
 * @module View.CharacaterSelection
 */

import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { AppState } from '../../store';
import { ActionButton } from '../atoms/ActionButton';
import { PageTitle } from '../atoms/PageTitle';
import { SelectionInfo } from '../sections/SelectionInfo';
import { SelectionList } from '../sections/SelectionList';

interface CSProps {
  clickHandler: React.MouseEventHandler<HTMLAnchorElement>;
}

/**
 * Character Route Component
 *
 * @remarks
 * Contains global state for selected pokemon.
 * Uses [[speciesSelector]] to pass down state.
 *
 * @return React Functional Component
 */
const CharacterSelection: React.FC<CSProps> = ({ clickHandler }) => {
  const selectedSpecies = useSelector((state: AppState) => state.species);

  return (
    <>
      <PageTitle title="character selection" />
      <SelectionInfo selectedSpecies={selectedSpecies} />
      <SelectionList selectedSpeciesName={selectedSpecies.name.toLowerCase()} />
      <StyledButtonWrapper>
        <ActionButton form="start" clickHandler={clickHandler} />
      </StyledButtonWrapper>
    </>
  );
};

const StyledButtonWrapper = styled.div`
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default CharacterSelection;
