
export default function ProductPage() {
  return (
    <div className="width-container u-flex-column">
      <section className="products-section">
        <h1 className="products-section__heading">
          Look Through All Of Our Fantastic Plants!
        </h1>
        <div className="products-section__content">
          <div className="products-section__card">
            <img
              className="product-card__image"
              src="./src/assets/images/blueFlower.png"
              alt="product: blue flower"
            />
            <h3 className="product-card__heading">Blue Flower</h3>
            <p className="product-card__body">
              Sky blue flower with a warm yellow center
            </p>
            <div className="product-card__counter">
              <button
                type="button"
                className="product-card__delete button--filled"
              >
                Del
              </button>
              <div className="product-card__count">0</div>
              <button
                type="button"
                className="product-card__add button--filled"
              >
                Add
              </button>
            </div>
          </div>
          <div className="products-section__card">
            <img
              className="product-card__image"
              src="./src/assets/images/tulipSmall.png"
              alt="product: tulip"
            />
            <h3 className="product-card__heading">Tulip</h3>
            <p className="product-card__body">
              Fire red tulip with a beautiful green stem
            </p>
            <div className="product-card__counter">
              <button
                type="button"
                className="product-card__delete button--filled"
              >
                Del
              </button>
              <div className="product-card__count">0</div>
              <button
                type="button"
                className="product-card__add button--filled"
              >
                Add
              </button>
            </div>
          </div>
          <div className="products-section__card">
            <img
              className="product-card__image"
              src="./src/assets/images/purpleFlowerSmall.png"
              alt="product: purple flower"
            />
            <h3 className="product-card__heading">Purple Flower</h3>
            <p className="product-card__body">
              Psychedelic looking monster plant
            </p>
            <div className="product-card__counter">
              <button
                type="button"
                className="product-card__delete button--filled"
              >
                Del
              </button>
              <div className="product-card__count">0</div>
              <button
                type="button"
                className="product-card__add button--filled"
              >
                Add
              </button>
            </div>
          </div>
          <div className="products-section__card">
            <img
              className="product-card__image"
              src="./src/assets/images/mandalaPlant.png"
              alt="product: mandala plant"
            />
            <h3 className="product-card__heading">Mandala Plant</h3>
            <p className="product-card__body">
              Light green plant that looks like a mandala
            </p>
            <div className="product-card__counter">
              <button
                type="button"
                className="product-card__delete button--filled"
              >
                Del
              </button>
              <div className="product-card__count">0</div>
              <button
                type="button"
                className="product-card__add button--filled"
              >
                Add
              </button>
            </div>
          </div>
          <div className="products-section__card">
            <img
              className="product-card__image"
              src="./src/assets/images/birdFoot.png"
              alt="product: bird foot"
            />
            <h3 className="product-card__heading">Bird Foot</h3>
            <p className="product-card__body">
              Deep green plant with shape of a bird’s foot
            </p>
            <div className="product-card__counter">
              <button
                type="button"
                className="product-card__delete button--filled"
              >
                Del
              </button>
              <div className="product-card__count">0</div>
              <button
                type="button"
                className="product-card__add button--filled"
              >
                Add
              </button>
            </div>
          </div>
          <div className="products-section__card">
            <img
              className="product-card__image"
              src="./src/assets/images/blueFrog.png"
              alt="product: blue frog"
            />
            <h3 className="product-card__heading">Blue Frog</h3>
            <p className="product-card__body">Mysterious blue frog flower</p>
            <div className="product-card__counter">
              <button
                type="button"
                className="product-card__delete button--filled"
              >
                Del
              </button>
              <div className="product-card__count">0</div>
              <button
                type="button"
                className="product-card__add button--filled"
              >
                Add
              </button>
            </div>
          </div>
          <div className="products-section__card">
            <img
              className="product-card__image"
              src="./src/assets/images/pinkPrincess.png"
              alt="product: pink princess"
            />
            <h3 className="product-card__heading">Pink Princess</h3>
            <p className="product-card__body">
              Pink water flower with beautiful pink petals
            </p>
            <div className="product-card__counter">
              <button
                type="button"
                className="product-card__delete button--filled"
              >
                Del
              </button>
              <div className="product-card__count">0</div>
              <button
                type="button"
                className="product-card__add button--filled"
              >
                Add
              </button>
            </div>
          </div>
          <div className="products-section__card">
            <img
              className="product-card__image"
              src="./src/assets/images/kingsball.png"
              alt="product: king's ball"
            />
            <h3 className="product-card__heading">King's Ball</h3>
            <p className="product-card__body">Deep blue, dense flower</p>
            <div className="product-card__counter">
              <button
                type="button"
                className="product-card__delete button--filled"
              >
                Del
              </button>
              <div className="product-card__count">0</div>
              <button
                type="button"
                className="product-card__add button--filled"
              >
                Add
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
