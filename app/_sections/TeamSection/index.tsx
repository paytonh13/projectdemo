"use client";

import React from "react";
import TeamSectionType1 from "./_TeamSectionType1";
import TeamSectionType2 from "./_TeamSectionType2";
import TeamSectionType3 from "./_TeamSectionType3";
import { TeamSectionData } from "./types/TeamSectionData";

interface TeamSectionProps {
  type: number;
  data: TeamSectionData;
}

const TeamSection: React.FC<TeamSectionProps> = ({ type, data }) => {
  const renderTeamSectionComponent = (type: number) => {
    switch (type) {
      case 1:
        return <TeamSectionType1 data={data} />;
      case 2:
        return <TeamSectionType2 data={data} />;
      case 3:
        return <TeamSectionType3 data={data} />;
      default:
        throw new Error(`TeamSection type ${type} is not supported`);
    }
  };

  return <>{renderTeamSectionComponent(type)}</>;
};

export default TeamSection;
