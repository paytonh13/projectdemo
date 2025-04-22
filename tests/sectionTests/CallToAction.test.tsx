import React from "react";
import { render, screen } from "@testing-library/react";
import CallToAction from "@components/CallToAction";
import { CallToActionData } from "@components/CallToAction/types/CallToActionData";
import { ButtonSettingsData } from "@components/types";

describe("CallToAction Component", () => {
  const mockButtons: ButtonSettingsData[] = [
  ];

  const mockData: CallToActionData = {
    title: "Test Title",
    subtitle: "Test Subtitle",
    tagLine: "Test Tagline",
    buttons: mockButtons,
    imgUrl: "/test-image.jpg",
    background: "image",
    backgroundColor: "#000000",
    textColor: "#ffffff",
    isTagline: "on",
  };

  test("renders CallToActionType1 correctly", () => {
    render(<CallToAction type={1} data={mockData} />);
    expect(screen.getByText("Test Title")).toBeInTheDocument();
    expect(screen.getByText("Test Subtitle")).toBeInTheDocument();
    expect(screen.getByText("Test Tagline")).toBeInTheDocument();
  });

  test("renders CallToActionType2 correctly", () => {
    render(<CallToAction type={2} data={mockData} />);
    expect(screen.getByText("Test Title")).toBeInTheDocument();
    expect(screen.getByText("Test Subtitle")).toBeInTheDocument();
    expect(screen.getByText("Test Tagline")).toBeInTheDocument();
  });

  test("renders CallToActionType3 correctly", () => {
    render(<CallToAction type={3} data={mockData} />);
    expect(screen.getByText("Test Title")).toBeInTheDocument();
    expect(screen.getByText("Test Subtitle")).toBeInTheDocument();
    expect(screen.getByText("Test Tagline")).toBeInTheDocument();
  });

  test("throws an error for an unsupported type", () => {
    expect(() => render(<CallToAction type={99} data={mockData} />)).toThrow(
      "CallToAction type 99 is not supported"
    );
  });
});
