/**
 *
 */

import React from 'react'
import styled from 'styled-components'
import { colorPicker } from '../../utils/colorPicker'
import { TypeName } from '../../mechanics/interface/types'
import { Label } from './Label'

interface StatBarProps {
  stat: string
  value: number
  type: TypeName[]
}

export const StatBar: React.FC<StatBarProps> = ({ stat, value, type }) => {
  return (
    <StyledStatContainer>
      <Label>{stat}</Label>
      <StyledBarContainer>
        <StyledStatBar value={value} type={type} />
      </StyledBarContainer>
      <StyledValueWrapper>
        <StyledStatValue>{value}</StyledStatValue>
      </StyledValueWrapper>
    </StyledStatContainer>
  )
}

/**
 * Outer container of singular stat bar.
 * Relies on margin-bottom for spacing.
 */
const StyledStatContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  max-width: 1000px;
  justify-content: left;
  align-items: center;
  margin-bottom: 20px;
`

/**
 * UI of actual bar.
 * Predefined height.
 */
const StyledBarContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.coolGray[100]};
  height: 13px;
  width: 375px;
  border-radius: 100px;
`

const StyledStatBar = styled.div<{ value: number; type: TypeName[] }>`
  // todo: fix this shit
  background-color: ${({ type }) => colorPicker(type[0])};
  height: 100%;
  width: ${({ value }) => ((value / 160) * 100).toString() + '%'};
  border-radius: 100px;
  transition: width 0.25s ease-in;
`

const StyledValueWrapper = styled.div`
  width: 50px;
  text-align: right;
`

const StyledStatValue = styled.h4`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.coolGray[500]}; ;
`
