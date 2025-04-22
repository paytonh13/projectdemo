import React from "react";
import { ServicesSectionData } from "./types/ServicesSectionData";
import VerticalTab from "./elements/VerticalTab";

interface ServicesSectionProps {
  data: ServicesSectionData;
}

const ServicesSectionType3: React.FC<ServicesSectionProps> = ({ data }) => {
  const { title, subtitle, tagLine, subHeading } = data;

  return (
    <div className="bg-gray-50">
      <div className="mx-auto max-w-[1440px] px-6 py-20 lg:p-20">
        <div className="mx-auto max-w-screen-xl text-center lg:mx-0 mb-10">
          <span className="text-base uppercase font-bold">{tagLine}</span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-neutral-800 sm:text-4xl">
            {title}
          </h2>
          <p className="mt-4 text-base text-neutral-500">{subtitle}</p>
        </div>
        <VerticalTab data={subHeading} />
      </div>
    </div>
  );
};

export default ServicesSectionType3;
