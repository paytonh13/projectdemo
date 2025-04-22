import { windowOpen } from "@/_utils/helpers";

export default function useRedirect() {
  const handleRedirect = (url: string, newTab: boolean = false): void => {
    if (newTab) {
      windowOpen(url, "_blank");
    } else {
      windowOpen(url, "_self");
    }
  };

  return { handleRedirect };
}
