"use client";

import React from "react";
import { BlogData } from "./types/BlogData";
import BlogItem from "./elements/BlogItem";

interface BlogProps {
  data: BlogData;
}

const BlogType3: React.FC<BlogProps> = ({ data }) => {
  const { title, subtitle, blogList, isShowAuthor } = data;

  return (
    <div className="bg-gray-50">
      <div className="mx-auto max-w-[1440px] px-6 py-20 lg:p-20">
        <div className="mx-auto w-full lg:mx-0 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-neutral-800 sm:text-4xl">
            {title}
          </h2>
          <p className="mt-6 text-base text-neutral-500">{subtitle}</p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-10 flex flex-col xl:flex-row  max-w-screen-xl gap-10 lg:mx-0 lg:max-w-none"
        >
          <div className="flex-1">
            {
              <BlogItem
                type={1}
                data={blogList[0]}
                viewOptions={{ direction: "column", isShowAuthor }}
              />
            }
          </div>
          <div className="flex flex-col gap-10 flex-1">
            {blogList.slice(1).map((blogItem, index) => (
              <BlogItem
                type={1}
                data={blogItem}
                viewOptions={{ direction: "row", isShowAuthor }}
                key={index}
              />
            ))}
          </div>
        </ul>
      </div>
    </div>
  );
};

export default BlogType3;
