type FetchErrorMessageProps = {
  message: string;
};
export function FetchErrorMessage({ message }: FetchErrorMessageProps) {
  return <p className="fetch-error-message">{message}</p>;
}

type LoadingMessageProps = {
  message: string;
};
export function LoadingMessage({ message }: LoadingMessageProps) {
  return <p className="loading-message">{message}</p>;
}

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
};
export function Container({ children, className = "", id }: ContainerProps) {
  return (
    <div
      id={id}
      className={`width-container u-flex-column ${className}`.trim()}
    >
      {children}
    </div>
  );
}


