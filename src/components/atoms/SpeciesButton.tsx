import React, { Dispatch } from 'react';
import styled from 'styled-components';
import { Species } from '../../mechanics/interface/Species';
import { imageSwitcher } from '../../utils/imageSwitcher';
import { colorPicker } from '../../utils/colorPicker';
import { ButtonClick } from '../../utils/types';
import { useDispatch, useSelector } from 'react-redux';
import { selectSpecies } from '../../store/actions/selectSpecies.action';
import useSound from 'use-sound';
import click from '../../assets/audio/click.mp3';
import { cryPicker } from '../../utils/cryPicker';
/**
 * Interface for Species Card Props
 */
interface SpeciesButtonProps {
  species: Species; // species needed for type
  isActive: boolean;
}

/**
 * React functional component for a species card.
 * @param props Species Card props
 */
export const SpeciesButton: React.FC<SpeciesButtonProps> = (props) => {
  // Redux hook
  const dispatch = useDispatch();
  // use sound hook

  const [clickAudio] = useSound(click);

  const clickHandler: ButtonClick = (e) => {
    let cry = new Audio(cryPicker(e.currentTarget.value));
    cry.volume = 0.6;
    setTimeout(() => cry.play(), 200)
    dispatch(selectSpecies(e.currentTarget.value));
    clickAudio();
  };

  return (
    <StyledButton
      onClick={(event) => clickHandler(event)}
      className={props.species.name}
      value={props.species.name.toLowerCase()}
      {...props}
    >
      <StyledImg src={imageSwitcher(props.species.name)} draggable={false} />
    </StyledButton>
  );
};

/**
 * Outer container styles
 *
 * @remarks
 * Implements SpeciesButtonProps
 */
const StyledButton = styled.button<SpeciesButtonProps>`
  height: 117px;
  width: 100px;
  border-radius: 14px;
  transform: skew(-12deg) scale(${({ isActive }) => (isActive ? 1.05 : 1)});
  transition: all 0.1s ease-in;
  overflow: hidden;
  position: relative;
  z-index: 9;
  background-color: ${({ isActive, species, theme }) =>
    isActive ? colorPicker(species.type[0], true) : theme.colors.coolGray[100]};

  :hover {
    cursor: pointer;
    transform: skew(-12deg) scale(1.05);
  }

  :active {
    transform: skew(-12deg) scale(1.15);
  }
`;

const StyledImg = styled.img`
  height: 100%;
  position: relative;
  right: 50%;
  transform: skew(12deg) translateX(5%);
  z-index: -1;
  user-select: none;
`;
