
// Component Props
export type DoubleButtonProps = {
  sectionClass: string;
  firstButtonTitle: string;
  secondButtonTitle: string;
};

export type SearchModalProps = {
  isOpen: boolean;
  message: string;
  onSearch: (productName: string) => void;
  onClose: () => void;
  toggleMenu(alwaysClosed?: boolean): void;
};
