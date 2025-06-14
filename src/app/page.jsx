"use client";
import { useEffect, useState } from "react";
import ProductCard from "./components/ProductCard";
import LoadingSpinner from "./components/LoadingSpinner";
import Navbar from "./components/Navbar";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch("https://api.escuelajs.co/api/v1/products");
        if (!res.ok) {
          throw new Error("Failed to fetch products.");
        }
        const data = await res.json();
        setProducts(data);
        setFilteredProducts(data);
      } catch (err) {
        setError(err.message || "An error occurred.");
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  useEffect(() => {
    const filtered = products.filter((product) => product.title.toLowerCase().includes(searchTerm.toLowerCase()));
    setFilteredProducts(filtered);
  }, [searchTerm, products]);

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <p className="text-red-500 m-4">{error}</p>;
  }

  return (
    <main>
      <Navbar />
      <h1 className="text-3xl font-bold m-4 text-white-800">Revo Shop Catalogue</h1>
      <input
        type="text"
        placeholder="Search for products..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border rounded-md p-4 w-full border-white-800 bg-brown-100 text-white m-4 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
        style={{ width: "100%", maxWidth: "400px" }}
      />
      <div className="grid grid-cols-4 gap-4">{filteredProducts.length > 0 ? filteredProducts.map((product) => <ProductCard key={product.id} product={product} />) : <p>No products found.</p>}</div>
        
    </main>
  );
}
