import { DoubleButtonProps } from "../../types";
import { useNavigate } from "react-router";
import Modal from "./Modal";
import { useState } from "react";
import { useCart } from "../../context/CartContext";

export default function DoubleButton({
  sectionClass,
  firstButtonTitle,
  secondButtonTitle,
}: DoubleButtonProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const { toggleNavBar } = useCart();

  function closeModal() {
    setIsModalOpen(false);
  }

  return (
    <div className={sectionClass + "__buttons u-double-buttons"}>
      <button
        onClick={() => {
          toggleNavBar(true);
          navigate("/products");
        }}
        className={"button button--filled " + sectionClass + "_button"}
        type="button"
        aria-label={`button saying: ${firstButtonTitle}`}
      >
        {firstButtonTitle}
      </button>
      <button
        onClick={() => setIsModalOpen(!isModalOpen)}
        className="button button--outline"
        type="button"
        aria-label={`button saying: ${secondButtonTitle}`}
      >
        {secondButtonTitle}
      </button>
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        message={
          "Click the 'Search' buttons or the 'Products' link to find and add items to the cart!"
        }
      />
    </div>
  );
}
