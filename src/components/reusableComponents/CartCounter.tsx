interface CartCounterProps {
  id: number;
  quantity: number;
  onAdd: (id: number) => void;
  onRemove: (id: number) => void;
  onReset: (id: number) => void;
  className?: string;
}

export default function CartCounter({
  id,
  quantity,
  onAdd,
  onRemove,
  onReset,
  className = "",
}: CartCounterProps) {
  return (
    <div className={`${className}__counter`}>
      <button
        onClick={() => onRemove(id)}
        type="button"
        className={`button button--filled ${className}__delete`}
        aria-label={`Decrease quantity for item ${id}`}
      >
        Del
      </button>
      <div className={`${className}__count`}>
        {quantity}
        <button
          onClick={() => onReset(id)}
          type="button"
          className={`button quantity-reset-button ${className}__quantity-reset ${
            quantity ? "u-flex-row" : "u-d-none"
          }`}
          aria-label={`Reset quantity for item ${id}`}
        >
          <img
            className={`quantity-reset-icon ${className}__reset-icon`}
            src="/assets/icons/trash.svg"
            alt=""
          />
        </button>
      </div>
      <button
        onClick={() => onAdd(id)}
        type="button"
        className={`button button--filled ${className}__add`}
        aria-label={`Increase quantity for item ${id}`}
      >
        Add
      </button>
    </div>
  );
}
