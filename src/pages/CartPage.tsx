export default function CartPage() {
  return (
    <div className="width-container u-flex-column">
      <section className="cart-section">
        <h1 className="cart-section__heading">CART</h1>
        <div className="cart-section__content">
          <div className="cart-section__card">
            <img
              className="cart-card__image"
              src="./src/assets/images/blue-flower.png"
              alt="product: blue flower"
            />
            <div className="cart-card__container">
              <h3 className="cart-card__heading">Blue Flower</h3>
              <div className="cart-card__counter">
                <button
                  type="button"
                  className="cart-card__delete button--filled"
                >
                  Del
                </button>
                <div className="cart-card__count">0</div>
                <button type="button" className="cart-card__add button--filled">
                  Add
                </button>
              </div>
            </div>
          </div>
          <div className="cart-section__card">
            <img
              className="cart-card__image"
              src="./src/assets/images/tulip.png"
              alt="product: tulip"
            />
            <div className="cart-card__container">
              <h3 className="cart-card__heading">Tulip</h3>
              <div className="cart-card__counter">
                <button
                  type="button"
                  className="cart-card__delete button--filled"
                >
                  Del
                </button>
                <div className="cart-card__count">0</div>
                <button type="button" className="cart-card__add button--filled">
                  Add
                </button>
              </div>
            </div>
          </div>
          <div className="cart-section__card">
            <img
              className="cart-card__image"
              src="./src/assets/images/purple-flower.png"
              alt="product: purple flower"
            />
            <div className="cart-card__container">
              <h3 className="cart-card__heading">Purple Flower</h3>
              <div className="cart-card__counter">
                <button
                  type="button"
                  className="cart-card__delete button--filled"
                >
                  Del
                </button>
                <div className="cart-card__count">0</div>
                <button type="button" className="cart-card__add button--filled">
                  Add
                </button>
              </div>
            </div>
          </div>
          <div className="cart-section__card">
            <img
              className="cart-card__image"
              src="./src/assets/images/mandala-plant.png"
              alt="product: mandala plant"
            />
            <div className="cart-card__container">
              <h3 className="cart-card__heading">Mandala Plant</h3>
              <div className="cart-card__counter">
                <button
                  type="button"
                  className="cart-card__delete button--filled"
                >
                  Del
                </button>
                <div className="cart-card__count">0</div>
                <button type="button" className="cart-card__add button--filled">
                  Add
                </button>
              </div>
            </div>
          </div>
          <div className="cart-section__card">
            <img
              className="cart-card__image"
              src="./src/assets/images/bird-foot.png"
              alt="product: bird foot"
            />
            <div className="cart-card__container">
              <h3 className="cart-card__heading">Bird Foot</h3>
              <div className="cart-card__counter">
                <button
                  type="button"
                  className="cart-card__delete button--filled"
                >
                  Del
                </button>
                <div className="cart-card__count">0</div>
                <button type="button" className="cart-card__add button--filled">
                  Add
                </button>
              </div>
            </div>
          </div>
          <div className="cart-section__card">
            <img
              className="cart-card__image"
              src="./src/assets/images/blue-frog.png"
              alt="product: blue frog"
            />
            <div className="cart-card__container">
              <h3 className="cart-card__heading">Blue Frog</h3>
              <div className="cart-card__counter">
                <button
                  type="button"
                  className="cart-card__delete button--filled"
                >
                  Del
                </button>
                <div className="cart-card__count">0</div>
                <button type="button" className="cart-card__add button--filled">
                  Add
                </button>
              </div>
            </div>
          </div>
          <div className="cart-section__card">
            <img
              className="cart-card__image"
              src="./src/assets/images/pink-princess.png"
              alt="product: pink princess"
            />
            <div className="cart-card__container">
              <h3 className="cart-card__heading">Pink Princess</h3>
              <div className="cart-card__counter">
                <button
                  type="button"
                  className="cart-card__delete button--filled"
                >
                  Del
                </button>
                <div className="cart-card__count">0</div>
                <button type="button" className="cart-card__add button--filled">
                  Add
                </button>
              </div>
            </div>
          </div>
          <div className="cart-section__card">
            <img
              className="cart-card__image"
              src="./src/assets/images/kings-ball.png"
              alt="product: king's ball"
            />
            <div className="cart-card__container">
              <h3 className="cart-card__heading">King's Ball</h3>
              <div className="cart-card__counter">
                <button
                  type="button"
                  className="cart-card__delete button--filled"
                >
                  Del
                </button>
                <div className="cart-card__count">0</div>
                <button type="button" className="cart-card__add button--filled">
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
