"use client";

import React from "react";
import { BlogData } from "./types/BlogData";
import { classNames } from "@/_utils/helpers";
import BlogItem from "./elements/BlogItem";

interface BlogProps {
  data: BlogData;
}

const BlogType4: React.FC<BlogProps> = ({ data }) => {
  const { title, subtitle, blogList, isShowAuthor } = data;

  return (
    <div className="bg-gray-50">
      <div className="mx-auto max-w-[1440px] grid grid-cols-1 gap-10 px-6 py-20 lg:p-20 xl:grid-cols-3">
        <div className="mx-auto max-w-screen-xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-neutral-800 sm:text-4xl">
            {title}
          </h2>
          <p className="mt-6 text-base text-neutral-500">{subtitle}</p>
        </div>
        <ul
          role="list"
          className="mx-auto grid max-w-screen-xl grid-cols-1 gap-6 lg:mx-0 lg:max-w-none xl:col-span-2"
        >
          {blogList.map((item, index) => (
            <BlogItem
              type={2}
              data={item}
              viewOptions={{ direction: "column", isShowAuthor }}
              key={index}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BlogType4;
