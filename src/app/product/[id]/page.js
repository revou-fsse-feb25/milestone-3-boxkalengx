export default async function ProductPage({ params }) {
  const { id } = params;
  const res = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`, { next: { revalidate: 60 } });
  const product = await res.json();

  return (
    <div>
      <h1>{product.title}</h1>
      <img src={product.images[0]} />
      <p>{product.description}</p>
      <p>{product.price}</p>
    </div>
  );
}
