/**
 * Display Name 
 * 
 * @remarks
 * The Display Name for the species chosen in the Character Selection page.
 * Is called from CharactersMain.tsx
 */

import React from 'react';
import styled from 'styled-components';

interface DisplayNameProps {
  name: string;
}

export const DisplayName: React.FC<DisplayNameProps> = ({ name }) => {
  return <StyledDisplayName>{name}</StyledDisplayName>;
};

const StyledDisplayName = styled.h1`
  font-size: 65px;
  font-weight: bold;
`;
