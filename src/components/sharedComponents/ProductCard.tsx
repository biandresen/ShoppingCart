import { Product } from "../../types";

type ProductCardProps = Product & {
  onAdd: () => void;
  onDelete: () => void;
};

export default function ProductCard({
  name,
  description,
  price,
  imageUrl,
  onAdd,
  onDelete,
}: ProductCardProps) {
  return (
    <article className="products-section__card">
      <img
        className="product-card__image"
        src={imageUrl}
        alt={`Product: ${name}`}
        loading="lazy"
      />
      <h3 className="product-card__heading">{name}</h3>
      <p className="product-card__body">{description}</p>
      <p className="product-card__price">
        <data value={price}>{`$${price.toFixed(2)}`}</data>
      </p>
      <div className="product-card__counter">
        <button
          type="button"
          className="product-card__delete button--filled"
          onClick={onDelete}
          aria-label={`Remove one ${name}`}
        >
          Del
        </button>
        <div className="product-card__count" aria-label="Current quantity">
          {0}
        </div>
        <button
          type="button"
          className="product-card__add button--filled"
          onClick={onAdd}
          aria-label={`Add one ${name}`}
        >
          Add
        </button>
      </div>
    </article>
  );
}
