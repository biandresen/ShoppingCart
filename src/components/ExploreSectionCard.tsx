import { ExploreSectionCard as CardProps } from "../types";

// ExploreSectionCard Component
export default function ExploreSectionCard({
  imageUrl,
  alt,
  title,
  body,
}: CardProps): JSX.Element {
  return (
    <div className="explore-section__card">
      <img
        src={imageUrl}
        alt={alt}
        className="explore-section__image"
        loading="lazy"
      />
      <div className="explore-section__card-text">
        <h3 className="explore-section__card-title">{title}</h3>
        <p className="explore-section__card-body">{body}</p>
      </div>
    </div>
  );
}
