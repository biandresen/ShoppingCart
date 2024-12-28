import { useState } from "react";
import { Product } from "../../types";

export default function ProductCard({
  name,
  description,
  price,
  imageUrl,
}: Product) {
  const [quantity, setQuantity] = useState(0);

  function onDelete(): void {
    if (quantity <= 0) return;
    setQuantity((q) => q - 1);
  }

  function onAdd(): void {
    setQuantity((q) => q + 1);
  }

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
          {quantity}
          <button
            onClick={() => setQuantity(0)}
            className={`quantity-reset ${quantity ? "u-flex-row" : ""}`}
            type="button"
            aria-label="reset quantity"
          >
            x
          </button>
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
