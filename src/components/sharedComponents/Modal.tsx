interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  message: string;
}

export default function Modal({ isOpen, onClose, message }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <p>{message}</p>
        <button type="button" className="button close-button" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}
