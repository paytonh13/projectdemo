export type BlogData = {
  title: string;
  subtitle: string;
  blogList: BlogItem[];
  isShowAuthor: boolean;
};

export type BlogItem = {
  title: string;
  subtitle: string;
  category: string;
  thumbnailUrl: string;
  publishedAt: string;
  timeRead: string;
  author: Author;
  href: string;
  type: number;
};

export type Author = {
  name: string;
  avatarUrl: string;
  href: string;
};

export type ViewOptions = {
  isShowAuthor: boolean;
  direction: "row" | "column";
};
