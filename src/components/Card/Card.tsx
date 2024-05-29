import React from "react";

interface CardType {
  onClick: () => void;
  className: string;
  image_container: string;
  image: string;
  alt: string;
  title: string;
  description: string;
  price: string;
}

export const Card = ({
  onClick,
  className,
  image_container,
  image,
  alt,
  title,
  description,
  price,
}: CardType) => {
  return (
    <>
      <div onClick={onClick} className={className}>
        <div className={image_container}>
          <img src={image} alt={alt} />
        </div>
        <div>
          <p>{title}</p>
          <p>{description}</p>
          <p>{price}</p>
        </div>
      </div>
    </>
  );
};
