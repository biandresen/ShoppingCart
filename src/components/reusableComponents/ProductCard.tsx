import { useNavigate } from "react-router";
import { useCart } from "../../context/CartContext";
import { Product } from "../../types";
import { formatCurrency } from "../../utils/formatCurrency";
import { NavLink } from "react-router-dom";

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
    <article className="product-card">
      <button
        onClick={() => navigate(`/products/${id}`)}
        className="button product-card__button"
        type="button"
      >
        <img
          className="product-card__image"
          src={imageUrl}
          alt={`Product: ${name}`}
          loading="lazy"
        />
      </button>
      <h3 className="product-card__heading">
        <NavLink to={`/products/${id}`}>{name}</NavLink>
      </h3>
      <p className="product-card__body">{description}</p>
      <p className="product-card__price">
        <data value={price}>{formatCurrency(price)}</data>
      </p>
      <div className="product-card__counter">
        <button
          type="button"
          className="button product-card__delete button--filled"
          onClick={() => decreaseCartQuantity(id)}
          aria-label={`Remove one ${name}`}
        >
          Del
        </button>
        <div className="product-card__count" aria-label="Current quantity">
          {quantity}
          <button
            onClick={() => removeFromCart(id)}
            className={`${quantity ? "button quantity-reset-button product-card__reset-button" : "u-d-none"}`}
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
          className="button product-card__add button--filled"
          onClick={() => increaseCartQuantity(id)}
          aria-label={`Add one ${name}`}
        >
          Add
        </button>
      </div>
    </article>
  );
}
