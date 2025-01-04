import { useNavigate } from "react-router";
import messages from "../utils/messages";
import Logo from "../components/reusableComponents/Logo";

export default function ErrorPage() {
  const navigate = useNavigate();

  return (
    <main className="error-page__container" aria-labelledby="error-page">
      <Logo
        logoUrl="/assets/icons/plantPlazaLogo.png"
        alt="Plant Plaza logo"
        imgClass="error-page"
      />
      <h1 className="error-page__heading">Site Not Found (404)</h1>
      <p className="error-page__body">
        {messages.error.pageNotFound ||
          "The page you are looking for does not exist."}
      </p>
      <button
        aria-label="Go to homepage"
        onClick={() => navigate("/")}
        type="button"
        className="button error-page__home-button"
      >
        Go To Homepage
      </button>
    </main>
  );
}
