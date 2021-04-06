import React from 'react'
import styled from 'styled-components'

interface PageTitleProps {
  title: string
}

export const PageTitle: React.FC<PageTitleProps> = ({ title }) => {
  return <StyledTitle>{title}</StyledTitle>
}

const StyledTitle = styled.div`
  position: absolute;
  top: 25px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 15px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.coolGray[300]};
  letter-spacing: 2px;
  text-transform: uppercase;
  text-align: center;
`
