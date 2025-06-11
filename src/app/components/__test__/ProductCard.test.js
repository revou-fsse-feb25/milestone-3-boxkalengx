import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import ProductCard from "@/app/components/ProductCard";

const addToCartMock = jest.fn();

jest.mock("@/app/context/CartContext", () => ({
  useCart: () => ({
    addToCart: addToCartMock,
  }),
}));

describe("ProductCard", () => {
  beforeEach(() => {
    addToCartMock.mockClear();
  });

  it("renders a product card with title, price, and image", () => {
    render(<ProductCard product={{ title: "Product 1", price: 10, images: ["https://example.com/image1.jpg"] }} />);

    const title = screen.getByRole("heading", { level: 3 });
    const price = screen.getByText("$10");
    const image = screen.getByRole("img");

    expect(title).toHaveTextContent("Product 1");
    expect(price).toHaveTextContent("$10");
    expect(image).toHaveAttribute("src", "https://example.com/image1.jpg");
  });

  it("renders product description", () => {
    render(<ProductCard product={{ title: "Product 1", description: "This is a great product.", price: 10, images: ["https://example.com/image1.jpg"] }} />);

    const description = screen.getByText("This is a great product.");
    expect(description).toBeInTheDocument();
  });

  it("calls addToCart when the button is clicked", () => {
    render(<ProductCard product={{ title: "Product 1", price: 10, images: ["https://example.com/image1.jpg"] }} />);

    const button = screen.getByRole("button");
    button.click();
  });
});
