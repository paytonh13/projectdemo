import React from "react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import { readFileSync } from "fs";
import path from "path";
import * as nextNavigation from "next/navigation";

import PageViewer from "../../app/[pageTitle]/page";

// 👉 Load mock JSON file
const loadJSON = (fileName: string) =>
  JSON.parse(
    readFileSync(path.resolve(__dirname, `../jsonTestFiles/${fileName}`), "utf-8")
  );

// 👉 Mock useParams to control pageTitle from route
vi.mock("next/navigation", async () => {
  const actual = await vi.importActual<typeof nextNavigation>("next/navigation");
  return {
    ...actual,
    useParams: vi.fn(() => ({ pageTitle: "Landing-Page" })),
  };
});

// 👉 Mock Navbar (excluded from test)
vi.mock("@components/Navbar", () => ({
  __esModule: true,
  default: () => null,
}));

// 👉 Mock all section components
vi.mock("@components/Header", () => ({
  __esModule: true,
  default: ({ type, data }: any) => (
    <div data-testid={`header-${type}`}>{data?.title}</div>
  ),
}));
vi.mock("@components/MainContent", () => ({
  __esModule: true,
  default: ({ type, data }: any) => (
    <div data-testid={`maincontent-${type}`}>{data?.tagLine}</div>
  ),
}));
vi.mock("@components/TextBox/_TextBox", () => ({
  __esModule: true,
  default: ({ data }: any) => (
    <div data-testid="textbox">{data?.content}</div>
  ),
}));
vi.mock("@components/Contact", () => ({
  __esModule: true,
  default: ({ type, data }: any) => (
    <div data-testid={`contact-${type}`}>{data?.mail}</div>
  ),
}));
vi.mock("@components/Footer/_FooterType1", () => ({
  __esModule: true,
  default: () => <div data-testid="footer">Footer</div>,
}));

describe("PageViewer Component", () => {
  beforeEach(() => {
    vi.resetModules();
  });

  const setupTest = async (pageTitle: string) => {
    const mockData = loadJSON("iteration4Demo.json");
    vi.mocked(nextNavigation.useParams).mockReturnValue({ pageTitle });

    global.fetch = vi.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockData),
      })
    ) as unknown as typeof fetch;

    render(<PageViewer />);
  };

  it("renders Landing Page (header only)", async () => {
    await setupTest("Landing-Page");

    await waitFor(() => {
      expect(screen.getByTestId("header-3")).toBeInTheDocument();
    });
  });

  it("renders Wacky Fun (maincontent + 2 textboxes)", async () => {
    await setupTest("Wacky-Fun");

    await waitFor(() => {
      expect(screen.getByTestId("maincontent-2")).toBeInTheDocument();
      expect(screen.getAllByTestId("textbox").length).toBeGreaterThanOrEqual(2);
    });
  });

  it("renders Stinky (textbox + contact)", async () => {
    await setupTest("Stinky");

    await waitFor(() => {
      expect(screen.getByTestId("textbox")).toBeInTheDocument();
      expect(screen.getByTestId("contact-4")).toBeInTheDocument();
    });
  });
});
