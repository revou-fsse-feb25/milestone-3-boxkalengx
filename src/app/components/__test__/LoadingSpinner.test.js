import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import LoadingSpinner from "@/app/components/LoadingSpinner";

describe("LoadingSpinner", () => {
  it("renders a loading spinner", () => {
    render(<LoadingSpinner />);

    const spinner = screen.getByRole("progressbar");
    expect(spinner).toBeInTheDocument();
  });

  it("renders a message", () => {
    render(<LoadingSpinner message="Loading..." />);

    const message = screen.getByText("Loading...");
    expect(message).toBeInTheDocument();
  });
});
