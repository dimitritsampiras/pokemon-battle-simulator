/**
 * Home.tsx
 *
 * @description
 * Tempalate view for home page.
 *
 * @module View.Home
 */

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import theme from '../../theme/theme';
import { ActionButton } from '../atoms/ActionButton';
import useSound from 'use-sound';

interface HomeProps {
  clickHandler: React.MouseEventHandler<HTMLAnchorElement>;
}

/**
 * Home Route Component
 * @returns React Functional Component
 */
const Home: React.FC<HomeProps> = ({clickHandler}) => {

  return (
    <HomeContainer>
      <Title>Pokémon Battle Simulator!</Title>
      <Info>A pokemon battling simulator made in React JS.</Info>
      <ActionButton form="cs" clickHandler={clickHandler}></ActionButton>
    </HomeContainer>
  );
};

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.div`
  font-size: ${theme.fontSize['5xl']};
  font-weight: ${theme.fontWeight.bold};
  margin-bottom: 1rem;
  text-align: center;
`;

const Info = styled.p`
  text-align: center;
  color: ${theme.colors.coolGray[500]};
  font-size: ${theme.fontSize['xl']};
  line-height: 1.75rem;
  width: 700px;
  margin-bottom: 400px;
`;

export default Home;
