import { ShowUIState } from "@components/types/common";

export type FooterData = {
  showContentFlags: {
    slogan: ShowUIState;
    socials: ShowUIState;
    copyRight: ShowUIState;
  };
  logo: string;
  slogan: string;
  copyRight: string;
  socials: Social[];
  navigation: Navigation[];
  polices: Policy[];
  ctaButtonLabel?: string;
  ctaButtonUrl?: string;
};

export type Social = {
  id: string;
  name: string;
  icon: string;
  url: string;
};

export type Navigation = {
  title: string;
  href: string;
  pageGroup?: string;
};

export type Policy = {
  title: string;
  url: string;
};
