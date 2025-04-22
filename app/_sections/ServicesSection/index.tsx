"use client";

import React from "react";
import ServicesSectionType1 from "./_ServicesSectionType1";
import ServicesSectionType2 from "./_ServicesSectionType2";
import ServicesSectionType3 from "./_ServicesSectionType3";
import { ServicesSectionData } from "./types/ServicesSectionData";

interface ServicesSectionProps {
  type: number;
  data: ServicesSectionData;
}

const ServicesSection: React.FC<ServicesSectionProps> = ({ type, data }) => {
  const renderServicesSectionComponent = (type: number) => {
    switch (type) {
      case 1:
        return <ServicesSectionType1 data={data} />;
      case 2:
        return <ServicesSectionType2 data={data} />;
      case 3:
        return <ServicesSectionType3 data={data} />;
      default:
        throw new Error(`ServicesSection type ${type} is not supported`);
    }
  };

  return <>{renderServicesSectionComponent(type)}</>;
};

export default ServicesSection;
