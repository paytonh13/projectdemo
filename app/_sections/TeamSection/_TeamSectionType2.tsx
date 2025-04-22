/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import { TeamSectionData } from "./types/TeamSectionData";
import { classNames } from "@/_utils/helpers";

interface TeamSectionProps {
  data: TeamSectionData;
}

const TeamSectionType2: React.FC<TeamSectionProps> = ({ data }) => {
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
          className="mx-auto mt-10 grid max-w-screen-xl grid-cols-1 gap-6 sm:grid-cols-2 lg:mx-0 lg:max-w-none xl:grid-cols-4"
        >
          {people.map((person) => (
            <li
              key={person.name}
              style={{ backgroundImage: `url(${person.imageUrl})` }}
              className="group flex flex-col gap-6 xl:flex-row aspect-[3/3] rounded-2xl bg-cover overflow-hidden"
            >
              <div className="flex flex-auto sm:hidden group-hover:flex flex-col justify-center p-6 text-gray-50 bg-linear-1 opacity-80 lg:opacity-90 lg:group-hover:opacity-90 lg:group-hover:animate-slide-up">
                <h3 className="text-base font-semibold text-gray-50">
                  {person.name}
                </h3>
                <p className="text-sm text-neutral-500">{person.role}</p>
                <p className="mt-4 text-sm">{person.bio}</p>
                <ul role="list" className="mt-4 flex gap-x-2">
                  {person.socials.map((social, index) => (
                    <li key={index}>
                      <a
                        href={social.url}
                        className="text-neutral-400 hover:text-neutral-500"
                      >
                        <span className="sr-only">{social.name}</span>
                        <i
                          className={classNames("pi text-gray-50", social.icon)}
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

export default TeamSectionType2;
