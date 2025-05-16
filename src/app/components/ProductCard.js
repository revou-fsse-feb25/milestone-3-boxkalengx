import Link from "next/link";

Link;
export default function ProductCard({ product }) {
  return (
    <div className="border m-4 p-4 text-gray-800 rounded-xl shadow-xl">
      <img src={product.image} className="h-40 mx-auto rounded-md" />
      <h3>{product.title}</h3>
      <p> {product.description}</p>
      <p>Price: ${product.price}</p>
      <Link className="text-color-green-500" href={`/product/${product.id}`}>
        View Product
      </Link>
    </div>
  );
}
