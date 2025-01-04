import { useState } from "react";
import CartItemCard from "../components/reusableComponents/CartCard";
import CartItemList from "../components/reusableComponents/CartItemList";
import { useCart } from "../context/CartContext";
import { formatCurrency } from "../utils/formatCurrency";
import { useNavigate } from "react-router";
import Modal from "../components/reusableComponents/Modal";
import {
  Container,
  FetchErrorMessage,
  LoadingMessage,
} from "../components/SmallComponents";
import { logger } from "../utils/logger";
import messages from "../utils/messages";

export default function CartPage() {
  const [listMode, setListMode] = useState(false); // State to toggle between card and list layout
  const [infoButtonIsOpen, setInfoButtonIsOpen] = useState(false); // Modal state for the info button
  const [isPulsingButton, setIsPulsingButton] = useState(true); // Button animation state for visual feedback

  // Extracting data from CartContext
  const { cartItems, isLoading, error, totalPrice, products, emptyCart } =
    useCart();

  const navigate = useNavigate();

  if (isLoading || !cartItems)
    return (
      <LoadingMessage
        message={messages.loading.pageContent || "Loading content..."}
      />
    );

  if (error) {
    // Logging error for debugging
    logger.error("Error fetching about page content", error);
    return (
      <FetchErrorMessage
        message={
          messages.error.pageContent ||
          "There was an error fetching the content."
        }
      />
    );
  }

  // Renders elements when non-empty cart
  function FilledCartState(): JSX.Element {
    return (
      <>
        <p className="cart-page__total-price-heading">
          Total:{" "}
          <data className="cart-page__total-price-data">
            {formatCurrency(totalPrice)}
          </data>
        </p>
        <button className="button cart-page__checkout-button" type="button" aria-label="checkout button">
          Checkout:{" "}
          <img
            className="cart-page__checkout-icon"
            src="/assets/icons/checkout.svg"
            aria-label="checkout"
            alt="checkout icon"
          />
        </button>
        <button
          onClick={emptyCart}
          type="button"
          className="button cart-page__empty-cart-button"
          aria-label="empty cart button"
        >
          <img
            className="quantity-reset-icon"
            src="/assets/icons/trash.svg"
            aria-label="empty cart"
            alt="empty cart icon"
          />
        </button>
        <button
          type="button"
          className={`button info-button cart-page__info-button ${
            isPulsingButton ? "animation__pulse" : ""
          }`}
          onClick={() => setInfoButtonIsOpen(true)}
          aria-label='info: Click "Trash" to empty cart. Click "Layout:" to change the layout.'
        >
          ?
        </button>
        <Modal
          isOpen={infoButtonIsOpen}
          onClose={() => {
            setInfoButtonIsOpen(false);
            setIsPulsingButton(false);
          }}
          message='Click "Trash" to empty cart. Click "Layout:" to change the layout.'
        />
        <button
          onClick={() => {
            setListMode(!listMode);
          }}
          type="button"
          className="button cart-page__list-layout-button "
          aria-label="change visual layout of products"
        >
          {`Layout: ${listMode ? "List" : "Card"}`}
        </button>
      </>
    );
  }

  // Renders info and button when cart is empty
  function NoItemsInCartState(): JSX.Element {
    return (
      <>
        <p className="cart-page__no-items-message">
          No Products In Cart Yet...
        </p>
        <button
          onClick={() => {
            navigate("/products");
          }}
          className={"button button--filled cart-page__search-button"}
          type="button"
          aria-label="product search button"
        >
          Find Products
        </button>
      </>
    );
  }

  // Rendering cart items in the selected layout (card or list)
  function RenderCartItems(): JSX.Element {
    return (
      <>
        {cartItems.map((item) => {
          const product = products?.find((p) => p.id === item.id);
          if (!product) return null;
          return listMode ?
              <CartItemList key={product.id} {...product} />
            : <CartItemCard key={product.id} {...product} />;
        })}
      </>
    );
  }

  //Renders the main content of the cart page
  return (
    <Container>
      <section className="cart-page">
        <h1 className="cart-page__heading">CART</h1>
        <div className="cart-page__content-container">
          <div className="cart-page__total-checkout-container">
            {totalPrice ?
              <FilledCartState />
            : null}
          </div>
          <div
            className={
              listMode && totalPrice ?
                "cart-page__cart-list-container"
              : "cart-page__no-items-container"
            }
          >
            {cartItems.length > 0 ?
              <RenderCartItems />
            : <NoItemsInCartState />}
          </div>
        </div>
      </section>
    </Container>
  );
}
