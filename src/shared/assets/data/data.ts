import peperoni_heart from "../images/pizza/peperoni-heart.webp";
import pie_heart from "../images/pizza/pie-heart.webp";
import cheddar from "../images/pizza/cheddar.webp";
import blue_cheese from "../images/pizza/blue-cheese.webp";
import cheese from "../images/pizza/cheese.webp";
import peperoni_fresh from "../images/pizza/peperoni-fresh.webp";

import cesar from "../images/pizza/cesar.webp";
import salmon from "../images/pizza/salmon.webp";
import carbonara from "../images/pizza/carbonara.webp";

import halfs from "../images/combo/halfs.webp";
import two_pizza from "../images/combo/two-pizza.webp";
import two_pizza_snack from "../images/combo/two-pizza-snack.webp"
import pizza_two_snack from "../images/combo/pizza-two-snack.webp"
import two_pizza_drink from "../images/combo/two-pizza-drink.webp"
import three_pizza from "../images/combo/three-pizza.webp"
import pizza_drink_snack from "../images/combo/pizza-drink-snack.webp"
import combo_hot from "../images/combo/combo-hot.webp"

const data = [
  {
    name: "Пицца из половинок",
    image: halfs,
    price: 600,
    section: "Pizza",
    description: "Соберите свою пиццу 35 см с двумя разными вкусами",
    popular: false,
    new: false,
    combo: true,
  },
  {
    name: "Пепперони-сердце",
    image: peperoni_heart,
    price: 625,
    section: "Pizza",
    description: "Пикантная пепперони, моцарелла, томатный соус",
    popular: false,
    new: false,
  },
  {
    name: "Пирог-сердце",
    image: pie_heart,
    price: 625,
    section: "Pizza",
    description: "Ананасы, брусника, сгущенное молоко",
    popular: false,
    new: false,
  },
  {
    name: "Чиззи чеддер",
    image: cheddar,
    price: 625,
    section: "Pizza",
    description:
      "Ветчина, сыр чеддер, сладкий перец, моцарелла, томатный соус, чеснок, итальянские травы",
    popular: false,
    new: true,
  },
  {
    name: "Цыпленок блю чиз",
    image: blue_cheese,
    price: 445,
    section: "Pizza",
    description: "Цыпленок, сыр блю чиз, томаты, моцарелла, соус альфредо",
    popular: false,
    new: true,
  },
  {
    name: "Нежный лосось",
    image: salmon,
    price: 495,
    section: "Pizza",
    description: "Лосось, томаты черри, соус песто, моцарелла, соус альфредо",
    popular: true,
    new: true,
  },
  {
    name: "Сырная",
    image: cheese,
    price: 245,
    section: "Pizza",
    description:
      "Увеличенная порция моцареллы, сыры чеддер и пармезан, соус альфредо",
    popular: false,
    new: true,
  },
  {
    name: "Пепперони фреш",
    image: peperoni_fresh,
    price: 245,
    section: "Pizza",
    description:
      "Пикантная пепперони, увеличенная порция моцареллы, томаты, томатный соус",
    popular: false,
    new: false,
  },
  {
    name: "Цезарь",
    image: cesar,
    price: 445,
    section: "Pizza",
    description:
      "Цыпленок, салат айсберг, томаты, сыры чеддер и пармезан, соус цезарь, итальянские травы",
    popular: true,
    new: false,
  },
  {
    name: "Карбонара",
    image: carbonara,
    price: 395,
    section: "Pizza",
    description:
      "Бекон , сыры чеддер и пармезан , моцарелла, томаты, соус альфредо, итальянские травы",
    popular: true,
    new: false,
  },
  {
    name: "2 пиццы",
    image: two_pizza,
    price: 899,
    section: "Combo",
    description: "Самое популярное комбо из 2 пицц 30 см. Большой выбор",
    popular: true,
    new: false,
  },
  {
    name: "Комбо за 599 ₽",
    image: pizza_drink_snack,
    price: 599,
    section: "Combo",
    description: "Самое популярное комбо из 2 пицц 30 см. Большой выбор",
    popular: false,
    new: false,
  },
  {
    name: "2 пиццы и закуска",
    image: two_pizza_snack,
    price: 899,
    section: "Combo",
    description: "Самое популярное комбо из 2 пицц 30 см. Большой выбор",
    popular: false,
    new: false,
  },
  {
    name: "Пицца и 2 закуски",
    image: pizza_two_snack,
    price: 899,
    section: "Combo",
    description: "Самое популярное комбо из 2 пицц 30 см. Большой выбор",
    popular: false,
    new: false,
  },
  {
    name: "Комбо за 999 ₽",
    image: three_pizza,
    price: 899,
    section: "Combo",
    description: "Самое популярное комбо из 2 пицц 30 см. Большой выбор",
    popular: false,
    new: false,
  },
  {
    name: "Горячий привет",
    image: combo_hot,
    price: 899,
    section: "Combo",
    description: "Самое популярное комбо из 2 пицц 30 см. Большой выбор",
    popular: false,
    new: false,
  },
  {
    name: "2 пиццы и напиток",
    image: two_pizza_drink,
    price: 899,
    section: "Combo",
    description: "Самое популярное комбо из 2 пицц 30 см. Большой выбор",
    popular: true,
    new: false,
  },
];

export { data };
