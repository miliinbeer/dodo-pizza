import React from "react";

interface ArticleCardType {
  image: string;
  alt: string;
  title: string;
  price: string;
}

export const ArticleCard = ({ image, alt, title, price }: ArticleCardType) => {
  return (
    <article className="popular__card">
      <img className="popular__card-image" src={image} alt={alt} />
      <div>
        <p>{title}</p>
        <p className="popular__card-price">{price}</p>
      </div>
    </article>
  );
};
