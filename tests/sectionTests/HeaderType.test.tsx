import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "@components/Header";
import HeaderType1 from "@components/Header/_HeaderType1";
import HeaderType2 from "@components/Header/_HeaderType2";
import HeaderType3 from "@components/Header/_HeaderType3";
import { HeaderData } from "@components/Header/types/HeaderData";


const mockData: HeaderData = {
  title: "Test Title",
  subtitle: "Test Subtitle",
  buttons: [],
  imgUrl: "/test-image.jpg",
  background: "image",
  backgroundColor: "#ffffff",
  textColor: "#000000",
};

describe("Header Component", () => {
  it("renders HeaderType1 correctly", () => {
    render(<HeaderType1 data={mockData} />);
    expect(screen.getByText("Test Title")).toBeInTheDocument();
    expect(screen.getByText("Test Subtitle")).toBeInTheDocument();
  });

  it("renders HeaderType2 correctly", () => {
    render(<HeaderType2 data={mockData} />);
    expect(screen.getByText("Test Title")).toBeInTheDocument();
    expect(screen.getByText("Test Subtitle")).toBeInTheDocument();
  });

  it("renders HeaderType3 correctly", () => {
    render(<HeaderType3 data={mockData} />);
    expect(screen.getByText("Test Title")).toBeInTheDocument();
    expect(screen.getByText("Test Subtitle")).toBeInTheDocument();
  });

  it("renders the correct header type based on props", () => {
    render(<Header type={1} data={mockData} />);
    expect(screen.getByText("Test Title")).toBeInTheDocument();
    expect(screen.getByText("Test Subtitle")).toBeInTheDocument();
  });

  it("throws an error for unsupported header types", () => {
    expect(() => render(<Header type={99} data={mockData} />)).toThrow();
  });
});
