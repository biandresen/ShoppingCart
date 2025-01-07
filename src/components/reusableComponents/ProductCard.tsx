import { useNavigate } from "react-router";
import { useCart } from "../../context/CartContext";
import { Product } from "../../types/cartContextTypes";
import { formatCurrency } from "../../utils/formatCurrency";
import { NavLink } from "react-router-dom";
import CartCounter from "./CartCounter";

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
      <CartCounter
        id={id}
        quantity={quantity}
        onAdd={increaseCartQuantity}
        onRemove={decreaseCartQuantity}
        onReset={removeFromCart}
        className={"product-card"}
      />
    </article>
  );
}
