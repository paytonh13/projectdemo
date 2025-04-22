import { describe, it, vi, expect, beforeEach } from "vitest";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { render } from "@testing-library/react";

// Component under test
import ProjectRedirectPage from "../../app/page";

vi.mock("next/headers", () => ({
  headers: () => ({
    get: vi.fn(() => "localhost:3000"),
  }),
}));

vi.mock("next/navigation", () => ({
  redirect: vi.fn(),
}));

describe("ProjectRedirectPage", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("redirects to the home page if isHome is true", async () => {
    global.fetch = vi.fn(() =>
      Promise.resolve({
        json: () =>
          Promise.resolve({
            pagesData: [
              {
                pageId: "1",
                pageTitle: "Home Page",
                designId: "d1",
                createdAt: "now",
                pageConfiguration: JSON.stringify({ isHome: true }),
              },
              {
                pageId: "2",
                pageTitle: "Other Page",
                designId: "d2",
                createdAt: "now",
                pageConfiguration: "{}",
              },
            ],
          }),
      })
    ) as unknown as typeof fetch;

    // @ts-ignore
    await ProjectRedirectPage();

    expect(redirect).toHaveBeenCalledWith("/Home-Page");
  });

  it("redirects to the first page if no isHome page exists", async () => {
    global.fetch = vi.fn(() =>
      Promise.resolve({
        json: () =>
          Promise.resolve({
            pagesData: [
              {
                pageId: "1",
                pageTitle: "First Page",
                designId: "d1",
                createdAt: "now",
                pageConfiguration: "{}",
              },
            ],
          }),
      })
    ) as unknown as typeof fetch;

    // @ts-ignore
    await ProjectRedirectPage();

    expect(redirect).toHaveBeenCalledWith("/First-Page");
  });

  it("renders fallback text if no pages exist", async () => {
    global.fetch = vi.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve({ pagesData: [] }),
      })
    ) as unknown as typeof fetch;

    const result = await ProjectRedirectPage();
    expect(result).toMatchInlineSnapshot(`
      <p>
        No valid pages found in data.json
      </p>
    `);
  });
});
