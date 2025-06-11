import { render, screen, renderHook } from "@testing-library/react";
import { CartProvider, useCart } from "@/app/context/CartContext";

describe("CartProvider", () => {
  it("renders children", () => {
    render(
      <CartProvider>
        <div>Test</div>
      </CartProvider>
    );

    const element = screen.getByText("Test");
    expect(element).toBeInTheDocument();
  });
});

describe("useCart", () => {
  it("returns the cartItems and addToCart function", () => {
    const { result } = renderHook(() => useCart(), {
      wrapper: CartProvider,
    });

    expect(result.current.cartItems).toEqual([]);
    expect(typeof result.current.addToCart).toBe("function");
  });
});

describe("addToCart", () => {
  it("adds a product to the cart", () => {
    const { result } = renderHook(() => useCart(), {
      wrapper: CartProvider,
    });

    result.current.addToCart({ id: 1, title: "Product 1", price: 10, quantity: 1 });
    expect(result.current.cartItems).toEqual([{ id: 1, title: "Product 1", price: 10, quantity: 1 }]);
  });
});
