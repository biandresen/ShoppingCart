import { NavLink } from "react-router-dom";

type LogoProps = {
  logoUrl: string;
  alt: string;
  imgClass?: string;
  headingClass?: string;
  heading?: string;
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
        <img className={imgClass+"__logo logo"} src={logoUrl} alt={alt} loading="lazy" />
        <h1 className={headingClass}>{heading}</h1>
      </NavLink>
    </>
  );
}
