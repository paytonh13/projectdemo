/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import { TeamSectionData } from "./types/TeamSectionData";
import { classNames } from "@/_utils/helpers";

interface TeamSectionProps {
  data: TeamSectionData;
}

const TeamSectionType3: React.FC<TeamSectionProps> = ({ data }) => {
  const { description, people } = data;

  return (
    <div className="bg-gray-50">
      <div className="mx-auto max-w-[1440px] px-6 py-20 lg:p-20">
        <div className="mx-auto w-full lg:mx-0 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-neutral-800 sm:text-4xl">
            Meet our team
          </h2>
          <p className="mt-6 text-base text-neutral-500">{description}</p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-10 grid max-w-screen-xl grid-cols-1 gap-8 sm:grid-cols-2 lg:mx-0 lg:max-w-none xl:col-span-2"
        >
          {people.map((person) => (
            <li
              key={person.name}
              className="flex flex-col gap-6 xl:flex-row bg-neutral-100 rounded-xl"
            >
              <img
                className="aspect-[3/2] min-w-[300px] rounded-2xl object-cover"
                src={person.imageUrl}
                alt=""
              />
              <div className="flex-auto px-4 lg:p-0">
                <h3 className="mt-6 text-base font-semibold text-neutral-800">
                  {person.name}
                </h3>
                <p className="text-sm text-neutral-500">{person.role}</p>
                <p className="mt-4 text-sm text-neutral-500">{person.bio}</p>
                <ul role="list" className="mt-4 mb-6     flex gap-x-2">
                  {person.socials.map((social, index) => (
                    <li key={index}>
                      <a
                        href={social.url}
                        className="text-neutral-400 hover:text-neutral-500"
                      >
                        <span className="sr-only">{social.name}</span>
                        <i
                          className={classNames(
                            "pi text-neutral-500",
                            social.icon
                          )}
                        />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TeamSectionType3;
