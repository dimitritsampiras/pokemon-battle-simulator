/**
 * ActionButton.tsx
 */

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { AppState } from '../../store';
import theme from '../../theme/theme';
import { colorPicker } from '../../utils/colorPicker';
import { ButtonClick } from '../../utils/types';

interface ActionButtonProps {
  form: 'next' | 'start' | 'cs';
  clickHandler?: React.MouseEventHandler<HTMLAnchorElement>;
}

/**
 * Menu button for actions.
 *
 * @remarks
 * This component sends user to next stage of game.
 *
 * @param form - The type of the action button
 */
export const ActionButton: React.FC<ActionButtonProps> = ({
  form,
  clickHandler,
}) => {
  const dispatch = useDispatch();

  const species = useSelector((state: AppState) => state.species);
  if (form === 'next')
    return (
      <StyledButton color={colorPicker(species.type[0])}>{form}</StyledButton>
    );
  else if (form === 'cs')
    return (
      <StyledLink
        onClick={clickHandler}
        to="/character-selection"
        color={theme.colors.rose[500]}
      >
        Start Game!
      </StyledLink>
    );
  else
    return (
      <StyledLink
        to="/battle"
        onClick={clickHandler}
        color={colorPicker(species.type[0])}
      >
        {form}
      </StyledLink>
    );
};

const buttonStyles = css`
  font-weight: bold;
  font-size: 15px;
  letter-spacing: 3px;
  padding: 15px 45px;
  border-radius: 100px;
  transition: all 0.1s ease-in;
  position: relative;
  z-index: 9;
  background-color: white;
  text-transform: uppercase;
  box-shadow: ${({ theme }) => theme.boxShadow.lg};
  :hover {
    cursor: pointer;
    transform: scale(1.05);
  }

  :active {
    transform: scale(1.1);
  }
`;

const StyledButton = styled.button<{ color: string }>`
  ${buttonStyles}
  color: ${({ color }) => color};
`;

const StyledLink = styled(Link)<{ color: string }>`
  ${buttonStyles}
  color: ${({ color }) => color};
  text-decoration: none;
`;
