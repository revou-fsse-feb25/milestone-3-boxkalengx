"use client";
import { useEffect, useState } from "react";
import ProductCard from "./components/ProductCard";
import FAQ from "./components/FAQ";
import LoadingSpinner from "./components/LoadingSpinner";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [searchhTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

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

  if (loading) {
    return <LoadingSpinner />;
  }
  if (error) {
    return <p className="text-red-500 m-4">{error}</p>;
  }
  if (!mounted || status === "loading") {
    return null;
  }
  return (
    <main>
      <h1 className="text-3xl font-bold m-4 text-white-800">Revo Shop Catalogue</h1>
      <input
        type="text"
        placeholder="Search for products..."
        value={searchhTerm}
        onClick={(e) => setSearchTerm(e.target.value)}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border rounded-md p-4 w-full border-white-800 bg-brown-100 text-white m-4 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
        style={{ width: "100%", maxWidth: "400px" }}
      />

      <div className="grid grid-cols-4 gap-4 ">{filteredProducts.length > 0 ? filteredProducts.map((product) => <ProductCard key={product.id} product={product} />) : <p>No products found.</p>}</div>
    </main>
  );
}
