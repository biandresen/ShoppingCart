import { useState } from "react";
import Modal from "./Modal";

type SignupFormProps = {
  formClass: string;
  buttonText: string;
};

export default function SignupForm({ formClass, buttonText }: SignupFormProps) {
  const [email, setEmail] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [emailError, setEmailError] = useState(false);

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!emailRegex.test(email)) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <form className={formClass + "__form"}>
        <div className={formClass + "__form-group"}>
          <input
            type="email"
            value={email}
            onChange={handleInputChange}
            className={formClass + "__input"}
            placeholder="Your Email Address"
            required
          />
          <button
            onClick={handleButtonClick}
            className={formClass + "__button button--filled"}
            type="submit"
          >
            {buttonText}
          </button>
        </div>
        <p className={formClass + "__terms policy_text"}>
          By clicking {buttonText}, you agree to our Terms and Conditions and
          Privacy Policy.
        </p>
      </form>
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        message={
          emailError ?
            "Please enter a valid email!"
          : `Your email (${email}) has been registered!`
        }
      />
    </>
  );
}
