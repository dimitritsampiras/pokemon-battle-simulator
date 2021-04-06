import { type } from 'os';
import React from 'react';
import styled from 'styled-components';
import { AbilityName, TypeName } from '../../mechanics/interface/types';
import { colorPicker } from '../../utils/colorPicker';

interface InfoValueProps {
  type?: TypeName;
  ability?: AbilityName;
  key?: number;
}

export const InfoValue: React.FC<InfoValueProps> = ({ type, ability }) => {  
  if (type) {
    return <StyledType type={type}>{type}</StyledType>;
  } else {
    return <StyledAbility>{ability}</StyledAbility>;
  }
};

const StyledType = styled.div<InfoValueProps>`
  padding: 6px 18px;
  margin: 0;
  margin-right: 10px;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 2px;
  text-transform: uppercase;
  border-radius: 100px;
  color: ${({ type }) => colorPicker(type!)};
  background-color: ${({ type }) => colorPicker(type!, true)};
`;

const StyledAbility = styled.div<InfoValueProps>`
  display: inline-block;
  padding: 8px 18px;
  margin: 0;
  margin-right: 10px;
  font-size: 12px;
  font-weight: 500;
  text-transform: capitalize;
  border-radius: 100px;
  color: ${({theme})=>theme.colors.coolGray[900]};
  background-color: ${({theme})=>theme.colors.coolGray[200]};
`;
