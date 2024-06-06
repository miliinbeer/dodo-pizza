import React from "react";
import { Button } from "../ui/Button/Button";

interface CardType {
  handlerCard: () => void;
  className: string;
  image_container: string;
  image: string;
  alt: string;
  title: string;
  description: string;
  price: string;
  handlerButton: () => void;
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
  handlerButton,
}: CardType) => {
  return (
    <>
      <div onClick={handlerCard} className={className}>
        <div className={image_container}>
          <img src={image} alt={alt} />
        </div>
        <div>
          <p>{title}</p>
          <p>{description}</p>

          <p>{price}</p>
          <Button
            onClick={handlerButton}
            className="button"
            children="Выбрать"
          />
        </div>
      </div>
    </>
  );
};
