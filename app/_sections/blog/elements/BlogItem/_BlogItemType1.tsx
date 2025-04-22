/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import Link from "next/link";
import { BlogItem, ViewOptions } from "../../types/BlogData";
import { ChevronRightIcon } from "@heroicons/react/24/outline";

interface BlogItemProps {
  data: BlogItem;
  viewOptions: ViewOptions;
}

const BlogItemType1: React.FC<BlogItemProps> = ({ data, viewOptions }) => {
  const {
    title,
    subtitle,
    category,
    thumbnailUrl,
    timeRead,
    publishedAt,
    href,
    author,
  } = data;
  const { direction = "row", isShowAuthor = true } = viewOptions;

  return (
    <div
      className={`flex ${
        direction === "column" ? "flex-col" : "flex-col xl:flex-row"
      } gap-4 bg-gray-50`}
    >
      <Link
        className={`${
          direction === "column"
            ? "w-full"
            : "flex-shrink-0 w-full xl:w-[298px]"
        }`}
        href={href}
      >
        <img
          className="w-full h-full max-h-[320px] xl:max-h-[224px] rounded-2xl object-cover"
          src={thumbnailUrl}
          alt="blog-image"
        />
      </Link>
      <div className="flex flex-col gap-4">
        <div className="flex gap-3 items-center">
          <div className="flex px-2 py-1 rounded-md bg-neutral-300">
            <span className="text-xs font-semibold text-neutral-800">
              {category}
            </span>
          </div>
          {!isShowAuthor && (
            <span className="text-xs font-normal text-neutral-500">
              {timeRead} read
            </span>
          )}
        </div>
        <Link className="flex flex-col gap-2" href={href}>
          <p className="text-xl font-semibold text-neutral-800">{title}</p>
          <span className="text-sm font-normal text-neutral-500">
            {subtitle}
          </span>
        </Link>
        {!isShowAuthor && (
          <div className="flex items-center gap-1 text-neutral-500">
            <Link className="text-sm font-semibold" href={href}>
              Read more
            </Link>
            <ChevronRightIcon className="w-4 h-4" />
          </div>
        )}
        {isShowAuthor && (
          <div className="flex gap-3 items-center">
            <img
              className="w-10 h-10 rounded-full"
              src={author.avatarUrl}
              alt="Avatar"
            />
            <div className="flex flex-col">
              <a
                className="text-base font-semibold text-neutral-800"
                href={author.href}
              >
                {author.name}
              </a>
              <span className="text-sm font-normal text-neutral-500">
                {publishedAt} · {timeRead} read
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogItemType1;
