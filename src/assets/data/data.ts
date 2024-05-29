import halfs from "../images/pizza/halfs.webp";
import peperoni_heart from "../images/pizza/peperoni-heart.webp";
import pie_heart from "../images/pizza/pie-heart.webp";
import cheddar from "../images/pizza/cheddar.webp";
import blue_cheese from "../images/pizza/blue-cheese.webp";
import cheese from "../images/pizza/cheese.webp";
import peperoni_fresh from "../images/pizza/peperoni-fresh.webp"

import cesar from "../images/pizza/cesar.webp";
import salmon from "../images/pizza/salmon.webp";
import carbonara from "../images/pizza/carbonara.webp";

import two from "../images/combo/two.webp";

const data = [
  {
    name: "Пицца из половинок",
    image: halfs,
    price: 600,
    section: "Pizza",
    description: "Соберите свою пиццу 35 см с двумя разными вкусами",
    favorite: false,
  },
  {
    name: "Пепперони-сердце",
    image: peperoni_heart,
    price: 625,
    section: "Pizza",
    description: "Пикантная пепперони, моцарелла, томатный соус",
    favorite: false,
  },
  {
    name: "Пирог-сердце",
    image: pie_heart,
    price: 625,
    section: "Pizza",
    description: "Ананасы, брусника, сгущенное молоко",
    favorite: false,
  },
  {
    name: "Чиззи чеддер",
    image: cheddar,
    price: 625,
    section: "Pizza",
    description:
      "Ветчина, сыр чеддер, сладкий перец, моцарелла, томатный соус, чеснок, итальянские травы",
    favorite: false,
  },
  {
    name: "Цыпленок блю чиз",
    image: blue_cheese,
    price: 445,
    section: "Pizza",
    description: "Цыпленок, сыр блю чиз, томаты, моцарелла, соус альфредо",
    favorite: false,
  },
  {
    name: "Нежный лосось",
    image: salmon,
    price: 495,
    section: "Pizza",
    description: "Лосось, томаты черри, соус песто, моцарелла, соус альфредо",
    favorite: true,
  },
  {
    name: "Сырная",
    image: cheese,
    price: 245,
    section: "Pizza",
    description:
      "Увеличенная порция моцареллы, сыры чеддер и пармезан, соус альфредо",
    favorite: false,
  },
  {
    name: "Пепперони фреш",
    image: peperoni_fresh,
    price: 245,
    section: "Pizza",
    description:
      "Пикантная пепперони, увеличенная порция моцареллы, томаты, томатный соус",
    favorite: false,
  },
  {
    name: "Цезарь",
    image: cesar,
    price: 445,
    section: "Pizza",
    description: "",
    favorite: true,
  },
  {
    name: "Карбонара",
    image: carbonara,
    price: 395,
    section: "Pizza",
    description:
      "Бекон , сыры чеддер и пармезан , моцарелла, томаты , красный лук , чеснок , соус альфредо, итальянские травы ",
    favorite: true,
  },
  {
    name: "2 пиццы",
    image: two,
    price: 899,
    section: "Combo",
    description: "",
    favorite: true,
  },
];

export { data };
