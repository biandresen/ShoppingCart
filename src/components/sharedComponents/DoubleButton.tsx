import { DoubleButtonProps } from "../../types";
import { useNavigate } from "react-router";
import Modal from "./Modal";
import { useState } from "react";
import { useCart } from "../../context/CartContext";
import SearchModal from "./SearchModal";

export default function DoubleButton({
  sectionClass,
  firstButtonTitle,
  secondButtonTitle,
}: DoubleButtonProps) {
  const [isHelpModalOpen, setIsHelpModalOpen] = useState(false);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);

  const { toggleNavBar, searchProducts } = useCart();
  const navigate = useNavigate();

  function closeHelpModal() {
    setIsHelpModalOpen(false);
  }

  function closeSearchModal() {
    setIsSearchModalOpen(false);
  }

  return (
    <div className={sectionClass + "__buttons u-double-buttons"}>
      <button
        onClick={() => {
          navigate("/products");
          if (sectionClass === "header") {
            setIsSearchModalOpen(!isSearchModalOpen);
          } else {
            toggleNavBar(true);
          }
        }}
        className={"button button--filled " + sectionClass + "_button"}
        type="button"
        aria-label={`button saying: ${firstButtonTitle}`}
      >
        {firstButtonTitle}
      </button>
      <button
        onClick={() => setIsHelpModalOpen(!isHelpModalOpen)}
        className="button button--outline"
        type="button"
        aria-label={`button saying: ${secondButtonTitle}`}
      >
        {secondButtonTitle}
      </button>
      <Modal
        isOpen={isHelpModalOpen}
        onClose={closeHelpModal}
        message={
          'Click the "Search"-button to search for specific products. Click the "Products"-button or the "Products"-link to look at all products!'
        }
      />
      <SearchModal
        isOpen={isSearchModalOpen}
        onSearch={searchProducts}
        onClose={closeSearchModal}
        message="Search Product"
        toggleNavBar={toggleNavBar}
      />
    </div>
  );
}
