import React from "react";
import { data } from "../../../assets/data/data";
import { Card } from "../../Card/Card";
// import { Button } from "../../ui/Button/Button";
import banner from "../../../assets/images/banner.webp";

export const Main = () => {
  const newAndPopular = data.filter((el) => el.favorite === true);
  const pizza = data.filter((el)=> el.section === "Pizza")

  return (
    <main>
      <img className="image" src={banner} alt="Banner" />
      <section className="favorite">
        <h1 className="favorite__title title">Новое и популярное</h1>
        <div className="favorite__cards">
          {newAndPopular.map((el, i) => (
            <Card
              key={i}
              handlerCard={() => console.log("Card")}
              className="favorite__card"
              image_container=""
              image={el.image}
              alt={el.name}
              title={el.name}
              description=""
              price={`от ${el.price} ₽`}
              handlerButton={() => console.log("Button")}
            />
          ))}
        </div>
      </section>
      <section className="pizza">
        <h1 className="pizza__title title">Пицца</h1>
        <div className="pizza__cards">
          {pizza.map((el, i) => (
            <Card
              key={i}
              handlerCard={() => console.log("Card")}
              className="pizza__card"
              image_container="image-container"
              image={el.image}
              alt={el.name}
              title={el.name}
              description={el.description}
              price={`от ${el.price} ₽`}
              handlerButton={() => console.log("Button")}
            />
          ))}
        </div>
      </section>
    </main>
  );
};
