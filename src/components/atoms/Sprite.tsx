import React from "react";
import styled from "styled-components";
import { imageSwitcher } from "../../utils/imageSwitcher";

interface SpriteProps {
  name: string;
}

export const Sprite: React.FC<SpriteProps> = ({ name }) => {
  return (
    <StyledContainer>
      <StyledDisplaySprite src={imageSwitcher(name, "display")} />
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  height: 450px;
  width: 450px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledDisplaySprite = styled.img`
  flex-shrink: 0;
  height: 100%;
`;
