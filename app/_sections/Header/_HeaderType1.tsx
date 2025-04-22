"use client";

import React from "react";
import ButtonActions from "../ButtonActions";
import { HeaderData } from "./types/HeaderData";
import Image from "next/image";
import { classNames } from "@/_utils/helpers";

interface HeaderProps {
  data: HeaderData;
}

const HeaderType1: React.FC<HeaderProps> = ({ data }) => {
  const {
    title,
    subtitle,
    buttons,
    imgUrl,
    background,
    backgroundColor,
    textColor,
  } = data;


  // Pierson - Add visuals for the Header data from forms
  // Buttons now work in Header
  return (
    <div
          className={classNames(
            "relative"
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
        <div className="mx-auto max-w-[1440px] min-h-[624px] py-20 px-6 gap-10  flex items-center justify-center lg:gap-16 relative">
          <div className="w-full flex flex-col items-center justify-center gap-10 lg:h-full">
            <div className="flex flex-col gap-10 text-center">
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

export default HeaderType1;
