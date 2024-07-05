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
import two_pizzas from "../images/combo/two-pizzas.webp";
import two_pizzas_snack from "../images/combo/two-pizzas-snack.webp";
import pizza_two_snacks from "../images/combo/pizza-two-snacks.webp";
import two_pizzas_drink from "../images/combo/two-pizzas-drink.webp";
import three_pizzas from "../images/combo/three-pizzas.webp";
import pizza_drink_snack from "../images/combo/pizza-drink-snack.webp";
import pizza_postcard_drink from "../images/combo/pizza-postcard-drink.webp";

import tomato_soup_croutons from "../images/snacks/tomato-soup-croutons.webp";
import tomato_soup_meatballs from "../images/snacks/tomato-soup-meatballs.webp";
import dodster from "../images/snacks/dodster.webp";
import dodster_hot from "../images/snacks/dodster-hot.webp";
import dodster_chipotle from "../images/snacks/dodster-chipotle.webp";

import apple_pie from "../images/desserts/apple-pie.webp";
import cheesecake_new_york from "../images/desserts/cheesecake-new-york.webp";
import two_fondants from "../images/desserts/two-fondants.webp";
import cocktail_oreo from "../images/desserts/cocktail-oreo.webp";
import cocktail_classic from "../images/desserts/cocktail-classic.webp";

import two_cola from "../images/drinks/two-cola.webp";
import cola_orange from "../images/drinks/cola-orange.webp";
import cola_zero from "../images/drinks/cola-zero.webp";
import cola from "../images/drinks/cola.webp";
import cola_vanilla from "../images/drinks/cola-vanilla.webp";

const header_navigation = [
  { title: "Пицца", href: "#pizza" },
  { title: "Комбо", href: "#combo" },
  { title: "Закуски", href: "#snacks" },
  { title: "Десерты", href: "#desserts" },
  { title: "Напитки", href: "#drinks" },
  { title: "Другие товары", href: "/" },
];

const footer_links = [
  {
    title: "Додо Пицца",
    links: [
      { link: "О нас", href: "/" },
      { link: "Додо-книга", href: "/" },
      { link: "Блог «Сила ума»", href: "/" },
      { link: "Додо ИС", href: "/" },
      ,
    ],
  },
  {
    title: "Работа",
    links: [
      { link: "В пиццерии", href: "/" },
      { link: "В контакт- центре", href: "/" },
      ,
    ],
  },
  {
    title: "Партнерам",
    links: [
      { link: "Франшиза", href: "/" },
      { link: "Инвестиции", href: "/" },
      { link: "Поставщикам", href: "/" },
      { link: "Предложить помещение", href: "/" },
      ,
    ],
  },
  {
    title: "Это интересно",
    links: [
      { link: "Экскурсии и мастер-классы", href: "/" },
      { link: "Корпоративные заказы", href: "/" },
      ,
    ],
  },
];

const data = [
  {
    name: "Пицца из половинок",
    image: halfs,
    price: 600,
    section: "Pizza",
    description: "Соберите свою пиццу 35 см с двумя разными вкусами",
    popular: false,
    new: false,
    collect: true,
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
    name: "Комбо за 599 ₽",
    image: pizza_drink_snack,
    price: 599,
    section: "Combo",
    description:
      "Наш хит «Аррива!» или другая пицца 25 см, Додстер, напиток и соус",
    popular: false,
    new: false,
  },
  {
    name: "2 пиццы",
    image: two_pizzas,
    price: 899,
    section: "Combo",
    description: "Самое популярное комбо из 2 пицц 30 см. Большой выбор",
    popular: true,
    new: false,
  },
  {
    name: "2 пиццы и закуска",
    image: two_pizzas_snack,
    price: 799,
    section: "Combo",
    description:
      "2 пиццы 25 см и закуска на выбор. Для компании из 2–4 человек",
    popular: false,
    new: false,
  },
  {
    name: "Пицца и 2 закуски",
    image: pizza_two_snacks,
    price: 799,
    section: "Combo",
    description:
      "Пицца 30 см и 2 закуски на выбор. Для компании из 2–4 человек",
    popular: false,
    new: false,
  },
  {
    name: "Комбо за 999 ₽",
    image: three_pizzas,
    price: 999,
    section: "Combo",
    description:
      "3 пиццы 30 см на тонком тесте по суперцене. Выбор пицц ограничен",
    popular: false,
    new: false,
  },
  {
    name: "Горячий привет",
    image: pizza_postcard_drink,
    price: 449,
    section: "Combo",
    description: "Пицца 25 см, морс, соус и открытка с теплыми словами",
    popular: false,
    new: false,
  },
  {
    name: "2 пиццы и напиток",
    image: two_pizzas_drink,
    price: 799,
    section: "Combo",
    description:
      "2 пиццы 25 см и напиток на выбор. Для компании из 2–4 человек",
    popular: true,
    new: false,
  },
  {
    name: "Томатный суп с гренками",
    image: tomato_soup_croutons,
    price: 99,
    section: "Snacks",
    description:
      "Горячий суп с пшеничными гренками на основе фирменного соуса из итальянских томатов",
    popular: false,
    new: false,
  },
  {
    name: "Томатный суп с митболами",
    image: tomato_soup_meatballs,
    price: 149,
    section: "Snacks",
    description:
      "Горячий суп c митболами из говядины и маслинами на основе фирменного соуса из итальянских томатов",
    popular: false,
    new: false,
  },
  {
    name: "Додстер",
    image: dodster,
    price: 159,
    section: "Snacks",
    description:
      "Легендарная горячая закуска с цыпленком, томатами, моцареллой, соусом ранч в тонкой пшеничной лепешке",
    popular: false,
    new: false,
  },
  {
    name: "Острый Додстер",
    image: dodster_hot,
    price: 159,
    section: "Snacks",
    description:
      "Горячая закуска с острым цыпленком, перцем халапеньо, солеными огурчиками, томатами, моцареллой и соусом барбекю в тонкой пшеничной лепешке",
    popular: false,
    new: false,
  },
  {
    name: "Додстер Чипотле",
    image: dodster_chipotle,
    price: 159,
    section: "Snacks",
    description:
      "Горячая закуска с пикантным соусом чипотле из копченых перчиков, цыпленком, томатами, моцареллой в тонкой пшеничной лепешке",
    popular: false,
    new: false,
  },
  {
    name: "Яблочный пирог",
    image: apple_pie,
    price: 99,
    section: "Desserts",
    description:
      "Десерт из песочного теста с яблочной начинкой. Может содержать изюм",
    popular: false,
    new: false,
  },
  {
    name: "Чизкейк Нью-Йорк",
    image: cheesecake_new_york,
    price: 149,
    section: "Desserts",
    description: "Классический американский творожный десерт",
    popular: false,
    new: false,
  },
  {
    name: "Фонданы, 2 шт",
    image: two_fondants,
    price: 159,
    section: "Desserts",
    description:
      "Два десерта с хрустящей корочкой и топлёной шоколадной начинкой",
    popular: false,
    new: false,
  },
  {
    name: "Молочный коктейль с печеньем Орео",
    image: cocktail_oreo,
    price: 159,
    section: "Desserts",
    description:
      "Напиток из молока и мороженого с добавлением дробленого печенья «Орео»",
    popular: false,
    new: false,
  },
  {
    name: "Классический молочный коктейль",
    image: cocktail_classic,
    price: 159,
    section: "Desserts",
    description: "Напиток из молока и мороженого",
    popular: false,
    new: false,
  },
  {
    name: "2 Coca-Cola по суперцене",
    image: two_cola,
    price: 99,
    section: "Drinks",
    description:
      "Две классические Coca-Cola по 0,5 литров по выгодной цене, 0,5 л",
    popular: false,
    new: false,
  },
  {
    name: "Coca-Cola Orange",
    image: cola_orange,
    price: 149,
    section: "Drinks",
    description: "0,5 л",
    popular: false,
    new: false,
  },
  {
    name: "Coca-Cola Zero",
    image: cola_zero,
    price: 159,
    section: "Drinks",
    description: "0,5 л",
    popular: false,
    new: false,
  },
  {
    name: "Coca-Cola",
    image: cola,
    price: 159,
    section: "Drinks",
    description: "0,5 л",
    popular: false,
    new: false,
  },
  {
    name: "Coca-Vanilla",
    image: cola_vanilla,
    price: 159,
    section: "Drinks",
    description: "0,5 л",
    popular: false,
    new: false,
  },
];

export { header_navigation, data, footer_links };
