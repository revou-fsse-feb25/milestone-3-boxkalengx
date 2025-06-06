"use client";
import { use, useEffect, useState } from "react";
import ProductCard from "./components/ProductCard";
import FAQ from "./components/FAQ";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [searchhTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      const res = await fetch("https://api.escuelajs.co/api/v1/products");
      const data = await res.json();
      setProducts(data);
      setFilteredProducts(data);
      console.log("data", data);
    }
    fetchProducts();
  }, []);

  useEffect(() => {
    const filtered = products.filter((product) => product.title.toLowerCase().includes(searchhTerm.toLowerCase()));
    setFilteredProducts(filtered);
  }, [searchhTerm, products]);
  return (
    <main>
      <h1 className="text-3xl font-bold mb-4 text-orange-800">Revo Shop Catalogue</h1>
      <input type="text" placeholder="Search for products..." value={searchhTerm} onClick={(e) => setSearchTerm(e.target.value)} onChange={(e) => setSearchTerm(e.target.value)} className="border rounded-md p-4 w-full border-white-800" />

      <div>{filteredProducts.length > 0 ? filteredProducts.map((product) => <ProductCard key={product.id} product={product} />) : <p>No products found.</p>}</div>
    </main>
  );
}
