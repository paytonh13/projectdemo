"use client";

import React from "react";
import { CallToActionData } from "./types/CallToActionData";
import ButtonActions from "../ButtonActions";
import Image from "next/image";
import { classNames } from "@/_utils/helpers";

interface CallToActionProps {
  data: CallToActionData;
}

const CallToActionType1: React.FC<CallToActionProps> = ({ data }) => {
  const {
    title,
    subtitle,
    buttons,
    tagLine,
    imgUrl,
    background,
    backgroundColor,
    textColor,
    isTagline
  } = data;

  return (
    <div
      className={classNames(
        "relative",
        background === "none" ? "bg-neutral-800" : ""
      )}
      style={background === "none" ? { backgroundColor } : {}}
    >
      {background === "image" && imgUrl && (
        <div className="absolute inset-0 z-0">
          <Image
            src={imgUrl}
            layout="fill"
            objectFit="cover"
            quality={100}
            alt="Background Image"
          />
          {/* Tint Overlay */}
          <div className="absolute inset-0 bg-gray-500 opacity-50"></div>{" "}
          {/* Gray tint */}
        </div>
      )}

      <div className="mx-auto max-w-[1440px] py-20 px-6 gap-10 lg:p-20 md:flex lg:items-center lg:justify-center lg:gap-10 relative">
        <div className="mx-auto max-w-screen-xl mt-10 flex flex-col items-center justify-center gap-10 lg:mt-0 lg:h-full">
          <div className="flex flex-col gap-6 text-center">
          {isTagline === "on" && (
              <span className="text-base uppercase font-bold" style={{ color: textColor }}>
                {tagLine}
              </span>
            )}
            <h1 className="text-5xl leading-h4" style={{ color: textColor }}>
              {title}
            </h1>
            <h6 className="leading-6" style={{ color: textColor }}>
              {subtitle}
            </h6>
          </div>

          <ButtonActions buttons = {buttons}/>
        </div>
      </div>
    </div>
  );
};

export default CallToActionType1;
