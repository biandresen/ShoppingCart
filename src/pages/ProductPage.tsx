import ProductCard from "../components/sharedComponents/ProductCard";
import { useFetch } from "../hooks/useFetch";
// import { Product } from "../types";

export default function ProductPage() {
  const { data: products, isLoading, error } = useFetch(
    "products",
    "http://localhost:4000/products"
  );

  if (isLoading) return <p>Loading products...</p>;
  if (error) return <p>Error fetching products: {(error as Error).message}</p>;

  return (
    <div className="width-container u-flex-column">
      <section className="products-section">
        <h1 className="products-section__heading">
          Look Through All Of Our Fantastic Plants!
        </h1>
        <div className="products-section__content">
          {products?.map((product) => (
            <ProductCard
              key={product.id}
              {...product}
              onAdd={() => console.log(`Added ${product.name}`)}
              onDelete={() => console.log(`Removed ${product.name}`)}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
