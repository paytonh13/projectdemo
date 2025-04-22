"use client";

import React from "react";
import BlogItemType1 from "./_BlogItemType1";
import BlogItemType2 from "./_BlogItemType2";
import type { BlogItem, ViewOptions } from "../../types/BlogData";

interface BlogItemProps {
  type: number;
  data: BlogItem;
  viewOptions: ViewOptions;
}

const BlogItem: React.FC<BlogItemProps> = ({ type, data, viewOptions }) => {
  const renderBlogItemComponent = (type: number) => {
    switch (type) {
      case 1:
        return <BlogItemType1 data={data} viewOptions={viewOptions} />;
      case 2:
        return <BlogItemType2 data={data} />;
      default:
        throw new Error(`BlogItem type ${type} is not supported`);
    }
  };

  return <>{renderBlogItemComponent(type)}</>;
};

export default BlogItem;
