/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState } from "react";
import { SubHeading } from "../../types/ServicesSectionData";

interface VerticalTabProps {
  data: SubHeading[];
}

const VerticalTab: React.FC<VerticalTabProps> = ({ data }) => {
  const [activeTab, setActiveTab] = useState(0);
  const enableIndexTab = 3;

  return (
    <div className="mx-auto w-full md:max-w-screen-xl lg:max-w-none grid grid-cols-1 lg:grid-cols-2 gap-10">
      <div>
        {data.map((item, index) => {
          return (
            <div
              className={`flex justify-center items-center  p-20 rounded-2xl bg-primary-100 ${
                index === activeTab ? "visible" : "hidden"
              }`}
              key={index}
            >
              <img
                src={item.imageExtra}
                className="h-[280px] object-cover"
                alt="star-icon"
              />
            </div>
          );
        })}
      </div>
      <div>
        {data.map((tab, index) => {
          const isActive = activeTab === index;
          const isEnable = index <= enableIndexTab;
          return (
            isEnable && (
              <div
                className={`relative flex flex-col p-6 gap-2 rounded-tr-md rounded-br-md cursor-pointer
      ${isActive ? "bg-primary-100" : "bg-gray-50"}`}
                onClick={() => setActiveTab(index)}
                onMouseEnter={() => setActiveTab(index)}
                key={index}
              >
                <div
                  className={`absolute top-0 left-0 h-full rounded-r-none ${
                    isActive
                      ? "border-primary-900 rounded-tl-md"
                      : "border-neutral-500"
                  } border-l-[4px]`}
                ></div>

                <span className="text-xl font-bold text-neutral-800">
                  {tab.title}
                </span>
                <span className="text-base font-normal  text-neutral-500">
                  {tab.subtitle}
                </span>
              </div>
            )
          );
        })}
      </div>
    </div>
  );
};

export default VerticalTab;
