export type TeamSectionData = {
  description: string;
  people: People[];
};

export type People = {
  name: string;
  role: string;
  imageUrl: string;
  bio: string;
  socials: Social[];
};

export type Social = {
  name: string;
  icon: string;
  url: string;
};
