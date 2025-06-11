"use client";
import Link from "next/link";
import { useCart } from "../context/CartContext";
import { ShoppingCart } from "lucide-react";
export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  return (
    <div className="border m-4 p-4 text-gray-800 rounded-xl shadow-xl bg-white">
      <img src={product.images[0]} className="h-40 mx-auto rounded-md" />
      <h3>{product.title}</h3>
      <p> {product.description}</p>
      <p>Price: ${product.price}</p>
      <div className="justify-between flex">
        <button className="m-2" onClick={() => addToCart(product)}>
          <ShoppingCart className="text-brown-800 inline-block mr-2" />
        </button>
        <Link href={`/product/${product.id}`}>View Product</Link>
      </div>
    </div>
  );
}
