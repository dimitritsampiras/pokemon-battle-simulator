import { type } from "os";
import React from "react";
import styled from "styled-components";
import { Species } from "../../mechanics/interface/Species";
import { selectSpecies } from "../../store/actions/selectSpecies.action";
import { InfoValue } from "../atoms/InfoValue";
import { Label } from "../atoms/Label";

interface InfoListProps {
  selectedSpecies: Species;
}

export const InfoList: React.FC<InfoListProps> = ({ selectedSpecies }) => {
  return (
    <SyledInfoContinaer>
      <StyledWrapper>
        <Label width="55px">Type</Label>
        {selectedSpecies.type.map((type, key) => (
          <InfoValue key={key} type={type} />
        ))}
      </StyledWrapper>
      <StyledWrapper>
        <Label width="75px">Abilities</Label>
        {selectedSpecies.abilities.map((ability, key) => (
          <InfoValue key={key} ability={ability} />
        ))}
      </StyledWrapper>
    </SyledInfoContinaer>
  );
};

const SyledInfoContinaer = styled.div`
  margin: 25px 0;
`;

const StyledWrapper = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  width: auto;
  margin-bottom: 15px;
`;
