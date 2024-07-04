import React from "react";
import { data } from "../../../shared/assets/data/data";
import { Card } from "../../../widgets/card/index";
import { Button } from "../../../shared/ui/button/index";
import { ArticleCard } from "../../../widgets/article-card";
import banner from "../../../shared/assets/images/banner.webp";

export const Content = () => {
  return (
    <main>
      <div className="slider">
        <img className="slider__image image" src={banner} alt="Banner" />
      </div>
      <section className="popular">
        <p className="popular__title title">Новое и популярное</p>
        <div className="popular__cards">
          {data
            .filter((el) => el.new === true || el.popular === true)
            .map((el, i) => (
              <ArticleCard
                key={i}
                image={el.image}
                alt={el.name}
                title={el.name}
                price={`от ${el.price} ₽`}
              />
            ))}
        </div>
      </section>
      <div className="sections">
        <section className="pizza">
          <p className="pizza__title title">Пицца</p>
          <div className="pizza__cards cards">
            {data
              .filter((el) => el.section === "Pizza")
              .map((el, i) => (
                <Card
                  key={i}
                  handlerCard={() => console.log("Card")}
                  className="pizza__card card"
                  image_container="image-container"
                  image={el.image}
                  alt={el.name}
                  title={el.name}
                  description={el.description}
                  price={`от ${el.price} ₽`}
                  button={
                    <Button
                      onClick={() => console.log("Button")}
                      className={
                        el.combo ? "button-primary" : "button-secondary"
                      }
                      children={el.combo ? "Собрать" : "Выбрать"}
                    />
                  }
                />
              ))}
          </div>
        </section>
        <section className="combo">
          <p className="combo__title title">Комбо</p>
          <div className="combo__cards cards">
            {data
              .filter((el) => el.section === "Combo")
              .map((el, i) => (
                <Card
                  key={i}
                  handlerCard={() => console.log("Card")}
                  className="combo__card card"
                  image_container="image-container"
                  image={el.image}
                  alt={el.name}
                  title={el.name}
                  description={el.description}
                  price={`от ${el.price} ₽`}
                  button={
                    <Button
                      onClick={() => console.log("Button")}
                      className={
                        el.combo ? "button-primary" : "button-secondary"
                      }
                      children={el.combo ? "Собрать" : "Выбрать"}
                    />
                  }
                />
              ))}
          </div>
        </section>
      </div>
    </main>
  );
};
