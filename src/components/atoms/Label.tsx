/**
 * Label
 *
 * @remarks
 * Label for various components
 */

import React from 'react';
import styled from 'styled-components';

// none needed to far
interface LabelProps {
  width?: string;
}

export const Label: React.FC<LabelProps> = ({ children, width }) => {
  return (
    <StyledLabelWrapper width={width}>
      <StyledLabel>{children}</StyledLabel>
    </StyledLabelWrapper>
  );
};

/**
 * Styles
 */
const StyledLabelWrapper = styled.div<LabelProps>`
  min-width: ${({width}) => width ? width : '85px'};
  text-align: left;
`;

const StyledLabel = styled.h5`
  font-size: 16px;
  font-weight: 500;
`;
