import { ReactElement } from "react";

interface CardType {
  handlerCard: () => void;
  className: string;
  image_container: string;
  image: string;
  alt: string;
  title: string;
  description: string;
  price: string;
  button: ReactElement;
}

export const Card = ({
  handlerCard,
  className,
  image_container,
  image,
  alt,
  title,
  description,
  price,
  button,
}: CardType) => {
  return (
    <>
      <div onClick={handlerCard} className={className}>
        <div>
          <div className={image_container}>
            <img className="card__image image" src={image} alt={alt} />
          </div>
          <p className="card__title">{title}</p>
          <p className="card__description">{description}</p>
        </div>
        <div className="card__items">
          <p className="card__price">{price}</p>
          <div>{button}</div>
        </div>
      </div>
    </>
  );
};
