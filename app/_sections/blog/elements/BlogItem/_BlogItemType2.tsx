/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import { BlogItem } from "../../types/BlogData";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

interface BlogItemProps {
  data: BlogItem;
}

const BlogItemType2: React.FC<BlogItemProps> = ({ data }) => {
  const { title, subtitle, category, timeRead, author, href } = data;

  return (
    <div className="flex flex-col p-8 gap-4 bg-gray-50 rounded-2xl border-1 border-neutral-50 shadow">
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <div className="flex px-2 py-1 rounded-md bg-neutral-300">
            <span className="text-xs font-semibold text-neutral-800">
              {category}
            </span>
          </div>
          <span className="text-xs font-normal text-neutral-500">
            {timeRead} read
          </span>
        </div>
        <Link className="flex flex-col gap-2" href={href}>
          <p className="text-xl font-semibold text-neutral-800">{title}</p>
          <span className="text-sm font-normal text-neutral-500">
            {subtitle}
          </span>
        </Link>
        <div className="flex items-center justify-between">
          <div className="flex gap-3 items-center">
            <img
              className="w-6 h-6 rounded-full"
              src={author.avatarUrl}
              alt="Avatar"
            />
            <a
              className="text-base font-semibold text-neutral-800"
              href={author.href}
            >
              {author.name}
            </a>
          </div>
          <div className="flex items-center gap-1 text-neutral-500">
            <a className="text-sm font-semibold">Read more</a>
            <ChevronRightIcon className="w-5 h-5" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogItemType2;
