import { NavLink } from "react-router-dom";

type LogoProps = {
  logoUrl: string;
  alt: string;
  imgClass?: string; // Optional class
  headingClass?: string; // Optional class
  heading: string;
};

export default function Logo({
  logoUrl,
  alt,
  imgClass,
  headingClass,
  heading,
}: LogoProps): JSX.Element {
  return (
    <>
      <NavLink to="/" aria-label={alt}>
        <img className={imgClass} src={logoUrl} alt={alt} loading="lazy" />
        <h1 className={headingClass}>{heading}</h1>
      </NavLink>
    </>
  );
}
