import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Navbar from "@/app/components/Navbar";
import * as CartContext from "@/app/context/CartContext";

describe("Navbar", () => {
  it("renders Navbar with items in cart", () => {
    jest.spyOn(CartContext, "useCart").mockReturnValue({
      cartItems: [{ quantity: 2 }, { quantity: 3 }],
    });

    render(<Navbar />);
    const linkElement = screen.getByRole("link", { name: /cart/i });
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveTextContent("Cart (5)");
  });

  it("shows Cart (0) when cart is empty", () => {
    jest.spyOn(CartContext, "useCart").mockReturnValue({
      cartItems: [],
    });

    render(<Navbar />);
    const linkElement = screen.getByRole("link", { name: /cart/i });
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveTextContent("Cart (0)");
  });
});
