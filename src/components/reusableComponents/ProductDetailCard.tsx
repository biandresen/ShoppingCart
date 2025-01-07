import { useCart } from "../../context/CartContext";
import { Product } from "../../types/cartContextTypes";
import { formatCurrency } from "../../utils/formatCurrency";
import CartCounter from "./CartCounter";

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
      <div className="product-detail-card__container">
        <h3 className="product-detail-card__heading">
          {name}
          <data value={price}>{formatCurrency(price)}</data>
        </h3>
        <p className="product-detail-card__body">{description}</p>
        <CartCounter
          id={id}
          quantity={quantity}
          onAdd={increaseCartQuantity}
          onRemove={decreaseCartQuantity}
          onReset={removeFromCart}
          className={"product-detail-card"}
        />
      </div>
    </article>
  );
}
