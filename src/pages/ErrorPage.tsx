import messages from "../utils/messages";

export default function ErrorPage() {
  return (
    <div className="error-page__container">
      <img
        className="error-page__logo"
        src="/assets/icons/plantPlazaLogo.png"
        alt="Plant Plaza logo"
      />
      <h1 className="error-page__heading">Site Not Found</h1>
      <p className="error-page__body">
        {messages.error.pageNotFound || "The page you are looking for does not exist."}
      </p>
    </div>
  );
}
