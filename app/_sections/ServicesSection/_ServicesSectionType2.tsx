import React from "react";
import Image from "next/image";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { ServicesSectionData } from "./types/ServicesSectionData";

interface ServicesSectionProps {
  data: ServicesSectionData;
}

const ServicesSectionType2: React.FC<ServicesSectionProps> = ({ data }) => {
  const { title, subtitle, tagLine, hrefLearnMore, subHeading } = data;

  return (
    <div className="bg-gray-50">
      <div className="mx-auto max-w-[1440px] px-6 py-20 lg:p-20">
        <div className="mx-auto grid max-w-screen-xl grid-cols-1 gap-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <div className="flex flex-col gap-6">
            <span className="text-base uppercase font-bold">{tagLine}</span>
            <h2 className="text-3xl font-bold tracking-tight text-neutral-800 sm:text-4xl">
              {title}
            </h2>
            <p className="text-base text-neutral-500">{subtitle}</p>
            <div className="flex items-center gap-1">
              <a
                href={hrefLearnMore}
                className="text-sm font-semibold text-neutral-500"
              >
                Learn more
              </a>
              <ChevronRightIcon className="w-5 h-5 text-neutral-500" />
            </div>
          </div>
          <dl className="col-span-2 grid grid-cols-1 gap-x-8 gap-y-10 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:gap-y-16">
            {subHeading.map((item, index) => (
              <div key={index}>
                <div className="inline-flex p-3 items-center rounded-lg bg-primary-100 mb-4">
                  <Image
                    src="/img/corporate-fare.svg"
                    width={32}
                    height={32}
                    alt="subheading-icon"
                  />
                </div>
                <p className="text-xl font-bold text-neutral-800">
                  {item.title}
                </p>
                <span className="mt-2 text-base font-normal text-neutral-500">
                  {item.subtitle}
                </span>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default ServicesSectionType2;
