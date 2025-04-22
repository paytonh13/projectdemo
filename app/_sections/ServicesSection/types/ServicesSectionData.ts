export type ServicesSectionData = {
  title: string;
  subtitle: string;
  tagLine?: string;
  hrefLearnMore?: string;
  subHeading: SubHeading[];
};

export type SubHeading = {
  title: string;
  subtitle: string;
  imageExtra?: string;
};
