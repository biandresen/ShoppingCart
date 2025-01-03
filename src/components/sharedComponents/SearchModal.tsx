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

  const startSearch = () => {
    if (!productName.trim()) return;
    onSearch(productName);
    setProductName("");
    onClose();
    toggleNavBar(true);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      startSearch();
    }
  };

  const handleClick = () => {
    startSearch();
  };

  if (!isOpen) return null;

  return (
    <div className="modal-search-overlay modal-overlay" onClick={onClose}>
      <div
        className="modal-search-content modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className="button modal-exit-button"
          onClick={onClose}
          aria-label="close search box"
        >
          X
        </button>
        <p className="modal-search-message modal-message">{message}</p>
        <div className="modal-search-container">
          <input
            type="text"
            className="modal-search-input"
            ref={inputRef}
            value={productName}
            onKeyDown={handleKeyDown}
            onChange={(e) => setProductName(e.target.value)}
            placeholder="product search..."
            aria-label="Search products"
          />
          <button
            type="button"
            className="button modal-search-button modal-button"
            onClick={handleClick}
            aria-label="Search button"
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
}
