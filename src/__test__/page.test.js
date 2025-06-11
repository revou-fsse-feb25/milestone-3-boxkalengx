import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Navbar from "@/app/components/Navbar";
import Page from "@/app/page"; // Adjust this import to your actual Page component path

describe("Navbar", () => {
  it("renders Navbar component with Cart link", () => {
    render(<Navbar />);

    const linkElement = screen.getByRole("link", { name: /cart/i });
    expect(linkElement).toBeInTheDocument();
  });
});

describe("Page", () => {
  it("renders a heading", () => {
    render(<Page />);

    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toBeInTheDocument();
  });
});
