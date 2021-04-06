import React from 'react';
import styled, { css } from 'styled-components';
import { Pokemon } from '../../mechanics/Pokemon';
import { InfoValue } from '../atoms/InfoValue';

interface HealthBarProps {
  pokemon: Pokemon;
}

export const HealthBar: React.FC<HealthBarProps> = ({ pokemon }) => {
  return (
    <StyledContainer>
      <StyledHeadingWrapper>
        <StyledName>{pokemon.name}</StyledName>
        {pokemon.type.map((type, key) => (
          <InfoValue key={key} type={type} />
        ))}
      </StyledHeadingWrapper>
      <StyledBodyWrapepr>
        <StyledValueWrapper>
          <BarValue> {pokemon.activeStats.hp}</BarValue>
          <BarValueDecorator>/ {pokemon.stats.hp}</BarValueDecorator>
        </StyledValueWrapper>
        <StyledBarContainer>
          <StyledBar
            activeValue={pokemon.activeStats.hp}
            fixedValue={pokemon.stats.hp}
          />
        </StyledBarContainer>
      </StyledBodyWrapepr>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: space-around;
  height: 165px;
  width: 425px;
  border-radius: ${({ theme }) => theme.borderRadius['3xl']};
  padding: ${({ theme }) => theme.spacing[5]};
`;

const StyledHeadingWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const StyledBodyWrapepr = styled.div``;

const StyledValueWrapper = styled.div`
  display: flex;
  align-items: baseline;
  margin-bottom: 14px;
`;

const StyledName = styled.h1`
  ${({ theme, ...props }) => css`
    font-weight: ${theme.fontWeight.bold};
    color: ${theme.fontWeight.black};
    font-size: ${theme.fontSize['3xl']};
    text-transform: capitalize;
    margin-right: ${theme.spacing[5]};
  `}
`;

const StyledBarContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.coolGray[100]};
  height: 13px;
  width: 100%;
  border-radius: ${({ theme }) => theme.borderRadius.full};
`;

const StyledBar = styled.div<{ activeValue: number; fixedValue: number }>`
  // todo: fix this shit
  background-color: ${({ theme }) => theme.colors.emerald[400]};
  height: 100%;
  width: ${({ activeValue, fixedValue }) =>
    `${(activeValue / fixedValue) * 100}%`};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  transition: width 2s ease-in;
`;

const BarValue = styled.h1`
  ${({ theme }) => css`
    font-weight: ${theme.fontWeight.semibold};
    color: ${theme.colors.emerald[400]};
    font-size: ${theme.fontSize['3xl']};
    transition: width 2s ease-in;
  `}
`;

const BarValueDecorator = styled.h1`
  ${({ theme, ...props }) => css`
    font-weight: ${theme.fontWeight.semibold};
    color: ${theme.colors.coolGray[300]};
    font-size: ${theme.fontSize.base};
    margin-left: 5px;
  `}
`;
