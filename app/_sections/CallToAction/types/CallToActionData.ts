import { ButtonSettingsData } from "@components/types";

export type CallToActionData = {
  title: string;
  subtitle: string;
  buttons: ButtonSettingsData[];
  tagLine?: string;
  imgUrl?: string;
  background: string;
  isTagline: string;
  backgroundColor?: string;
  textColor?: string;
};
