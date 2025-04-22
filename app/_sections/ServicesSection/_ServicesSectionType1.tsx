import React from "react";
import Image from "next/image";
import { ServicesSectionData } from "./types/ServicesSectionData";

interface ServicesSectionProps {
  data: ServicesSectionData;
}

const ServicesSectionType1: React.FC<ServicesSectionProps> = ({ data }) => {
  const { title, subtitle, tagLine, subHeading } = data;

  return (
    <div className="bg-gray-50">
      <div className="mx-auto max-w-[1440px] px-6 py-20 lg:p-20">
        <div className="mx-auto max-w-screen-xl text-center lg:mx-0">
          <span className="text-base uppercase font-bold">{tagLine}</span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-neutral-800 sm:text-4xl">
            {title}
          </h2>
          <p className="mt-4 text-base text-neutral-500">{subtitle}</p>
        </div>
        <dl className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-8 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {subHeading.map((item, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex p-3 items-center rounded-lg bg-primary-100 mb-4">
                <Image
                  src="/img/corporate-fare.svg"
                  width={32}
                  height={32}
                  alt="subheading-icon"
                />
              </div>
              <p className="text-xl font-bold text-neutral-800">{item.title}</p>
              <span className="mt-2 text-base font-normal text-neutral-500">
                {item.subtitle}
              </span>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
};

export default ServicesSectionType1;
