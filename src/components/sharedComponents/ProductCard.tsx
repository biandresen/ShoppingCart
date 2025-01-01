import { useNavigate } from "react-router";
import { useCart } from "../../context/CartContext";
import { Product } from "../../types";
import { formatCurrency } from "../../utils/formatCurrency";

export default function ProductCard({
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

  const navigate = useNavigate();
  const quantity = getItemQuantity(id);

  return (
    <article className="products-section__card">
      <button
        onClick={() => navigate(`/products/${id}`)}
        className="product-button"
        type="button"
      >
        <img
          className="product-card__image"
          src={imageUrl}
          alt={`Product: ${name}`}
          loading="lazy"
        />
      </button>
      <h3 className="product-card__heading">{name}</h3>
      <p className="product-card__body">{description}</p>
      <p className="product-card__price">
        <data value={price}>{"$" + formatCurrency(price)}</data>
      </p>
      <div className="product-card__counter">
        <button
          type="button"
          className="product-card__delete button--filled"
          onClick={() => decreaseCartQuantity(id)}
          aria-label={`Remove one ${name}`}
        >
          Del
        </button>
        <div className="product-card__count" aria-label="Current quantity">
          {quantity}
          <button
            onClick={() => removeFromCart(id)}
            className={`quantity-reset ${quantity ? "u-flex-row" : ""}`}
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
          className="product-card__add button--filled"
          onClick={() => increaseCartQuantity(id)}
          aria-label={`Add one ${name}`}
        >
          Add
        </button>
      </div>
    </article>
  );
}
