interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  message: string;
}

export default function Modal({ isOpen, onClose, message }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="modal-help-overlay modal-overlay" onClick={onClose}>
      <div className="modal-help-content modal-content" onClick={(e) => e.stopPropagation()}>
        <p className="modal-help-message modal-message">{message}</p>
        <button
          type="button"
          className="button modal-close-button modal-button"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
}
