import { DoubleButtonProps } from "../../types/componentTypes";
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

  const { toggleMenu, searchProducts } = useCart();
  const navigate = useNavigate();

  return (
    <div className={sectionClass + "__double-buttons u-double-buttons"}>
      <button
        onClick={() => {
          navigate("/products");
          if (sectionClass === "nav") {
            setIsSearchModalOpen(!isSearchModalOpen);
          } else {
            toggleMenu(true);
          }
        }}
        className={"button button--filled " + sectionClass + "__button"}
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
        onClose={() => setIsHelpModalOpen(false)}
        message={
          'Click "Search" to search for specific products. Click "Products" to look at all products.'
        }
      />
      <SearchModal
        isOpen={isSearchModalOpen}
        onSearch={searchProducts}
        onClose={() => setIsSearchModalOpen(false)}
        message="Search For Products"
        toggleMenu={toggleMenu}
      />
    </div>
  );
}
