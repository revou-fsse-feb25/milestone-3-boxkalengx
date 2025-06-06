"use client";
import { useEffect, useState } from "react";
import ProductCard from "./components/ProductCard";
import FAQ from "./components/FAQ";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [searchhTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setProducts(data);
      setFilteredProducts(data);
      console.log("data", data);
    }
    fetchProducts();
  }, []);

  return (
    <main>
      <h1 className="text-3xl font-bold mb-4 text-gray-800">Revo Shop Catalogue</h1>
      <input type="text" placeholder="Search for products..." className="border rounded-md p-4 w-full border-white-800" />

      <div>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}
