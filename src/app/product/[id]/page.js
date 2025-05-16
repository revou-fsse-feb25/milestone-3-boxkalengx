export default async function ProductPage({ params }) {
  const { id } = params;
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  const product = await res.json();

  return (
    <div>
      <h1>{product.title}</h1>
      <img src={product.image} />
      <p>{product.description}</p>
      <p>{product.price}</p>
    </div>
  );
}
