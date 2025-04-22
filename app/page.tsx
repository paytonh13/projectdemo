import { redirect } from "next/navigation";
import { headers } from "next/headers";
import React from "react";

export const dynamic = "force-dynamic";

type PageData = {
  pageId: string;
  pageTitle: string;
  designId: string;
  createdAt: string;
  pageConfiguration: string | null;
};

const ProjectRedirectPage = async () => {
  const host = headers().get("host");
  const protocol = process.env.NODE_ENV === "development" ? "http" : "https";
  const url = `${protocol}://${host}/data.json`;

  const res = await fetch(url, { cache: "no-store" });
  const viewerData = await res.json();

  const pages: PageData[] = viewerData.pagesData ?? [];

  // Look for a page with pageConfiguration: { isHome: true }
  const homePage = pages.find((page) => {
    try {
      const config = page.pageConfiguration ? JSON.parse(page.pageConfiguration) : {};
      return config.isHome === true;
    } catch {
      return false;
    }
  });

  const pageToRedirect = homePage ?? pages[0];

  if (!pageToRedirect?.pageTitle) {
    return <p>No valid pages found in data.json</p>;
  }

  const parsedTitle = pageToRedirect.pageTitle.replace(/\s+/g, "-");
  redirect(`/${parsedTitle}`);
};

export default ProjectRedirectPage;
