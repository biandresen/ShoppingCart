import { useState, useRef, useEffect } from "react";
import { SearchModalProps } from "../../types";

export default function SearchModal({
  isOpen,
  onSearch,
  onClose,
  message,
  toggleNavBar,
}: SearchModalProps) {
  const [productName, setProductName] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="modal-search-overlay modal-overlay" onClick={onClose}>
      <div
        className="modal-search-content modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <p className="modal-search-message modal-message">{message}</p>
        <div className="modal-search-container">
          <input
            type="text"
            className="modal-search-input"
            ref={inputRef}
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            placeholder="product search..."
          />
          <button
            type="button"
            className="button modal-search-button modal-button"
            onClick={() => {
              onSearch(productName);
              setProductName("");
              onClose();
              toggleNavBar(true);
            }}
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
}
