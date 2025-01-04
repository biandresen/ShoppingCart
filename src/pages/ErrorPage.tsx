export default function ErrorPage() {
  return (
    <div className="error-page__container">
      <img
        className="error-page__logo"
        src="/assets/icons/plantPlazaLogo.png"
        alt=""
      />
      <h1 className="error-page__heading">Site Not Found</h1>
      <p className="error-page__body">
        Something went wrong. Check the address or try again later.
      </p>
    </div>
  );
}
