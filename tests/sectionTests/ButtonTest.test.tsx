import Button from "@components/Button";
import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";

describe("Button Component", () => {
  it("triggers onClick event when clicked", () => {
    let clicked = false;
    const handleClick = () => {
      clicked = true;
    };

    render(<Button label="Click me" onClick={handleClick} />);
    fireEvent.click(screen.getByText("Click me"));

    expect(clicked).toBe(true); // Check if the function was triggered
  });  
  it("applies the correct classes based on props", () => {
    render(
      <Button
        label="Styled"
        color="secondary"
        size="large"
        className="custom-class"
      />
    );
    const button = screen.getByRole("button");
    expect(button).toHaveClass("button");
    expect(button).toHaveClass("button-secondary");
    expect(button).toHaveClass("button-large");
    expect(button).toHaveClass("custom-class");
  });


  it("renders iconLeft and label correctly", () => {
    const Icon = <i data-testid="icon-left" className="pi pi-user" />;
    render(
      <Button
        label="Profile"
        iconLeft={Icon}
        color="primary"
        size="medium"
      />
    );
    expect(screen.getByText("Profile")).toBeInTheDocument();
    expect(screen.getByTestId("icon-left")).toBeInTheDocument();
  });

  it("renders iconLeft and label correctly", () => {
    const Icon = <i data-testid="icon-left" className="pi pi-user" />;
    render(
      <Button
        label="Profile"
        iconLeft={Icon}
        color="primary"
        size="medium"
      />
    );
    expect(screen.getByText("Profile")).toBeInTheDocument();
    expect(screen.getByTestId("icon-left")).toBeInTheDocument();
  });

  });