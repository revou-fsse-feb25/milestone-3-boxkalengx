export const revalidate = 60;

async function getProducts() {
  const res = await fetch("https://api.escuelajs.co/api/v1/products", {});
  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }
  return res.json();
}

export default async function ISRPage() {
  const products = await getProducts();
  const now = new Date().toLocaleString();
  return (
    <div>
      <h1>ISR Page</h1>
      <p>Current time: {now}</p>
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
}
