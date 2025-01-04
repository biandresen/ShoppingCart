import { useCart } from "../../context/CartContext";
import { Product } from "../../types";
import { formatCurrency } from "../../utils/formatCurrency";

export default function ProductDetailCard({
  id,
  name,
  description,
  price,
  imageUrl,
}: Product) {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useCart();

  const quantity = getItemQuantity(id);

  return (
    <article className="product-detail-card">
      <img
        className="product-detail-card__image"
        src={imageUrl}
        alt={`Product: ${name}`}
        loading="lazy"
      />
      <div className="product-detail-card-section__container">
        <h3 className="product-detail-card__heading">
          {name}
          <data value={price}>{" $" + formatCurrency(price)}</data>
        </h3>
        <p className="product-detail-card__body">{description}</p>
        <div className="product-detail-card__counter">
          <button
            type="button"
            className="button product-detail-card__delete button--filled"
            onClick={() => decreaseCartQuantity(id)}
            aria-label={`Remove one ${name}`}
          >
            Del
          </button>
          <div
            className="product-detail-card__count"
            aria-label="Current quantity"
          >
            {quantity}
            <button
              onClick={() => removeFromCart(id)}
              className={`${quantity ? "button quantity-reset-button product-detail-card__reset-button" : "u-d-none"}`}
              type="button"
              aria-label="reset quantity"
            >
              <img
                className="quantity-reset-icon"
                src="/assets/icons/trash.svg"
                alt=""
              />
            </button>
          </div>
          <button
            type="button"
            className="button product-detail-card__add button--filled"
            onClick={() => increaseCartQuantity(id)}
            aria-label={`Add one ${name}`}
          >
            Add
          </button>
        </div>
      </div>
    </article>
  );
}
