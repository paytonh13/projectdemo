"use client";

import React from "react";
import BlogType1 from "./_BlogType1";
import BlogType2 from "./_BlogType2";
import BlogType3 from "./_BlogType3";
import BlogType4 from "./_BlogType4";
import { BlogData } from "./types/BlogData";

interface BlogProps {
  type: number;
  data: BlogData;
}

const Blog: React.FC<BlogProps> = ({ type, data }) => {
  const renderBlogComponent = (type: number) => {
    switch (type) {
      case 1:
        return <BlogType1 data={data} />;
      case 2:
        return <BlogType2 data={data} />;
      case 3:
        return <BlogType3 data={data} />;
      case 4:
        return <BlogType4 data={data} />;
      default:
        throw new Error(`Blog type ${type} is not supported`);
    }
  };

  return <>{renderBlogComponent(type)}</>;
};

export default Blog;
