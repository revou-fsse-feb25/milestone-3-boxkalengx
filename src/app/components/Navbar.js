import Link from "next/link";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const { cartItems } = useCart();
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  return (
    <nav>
      <Link href="/cart">Cart ({totalItems})</Link>
    </nav>
  );
}
