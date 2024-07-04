import React from "react";

export const Navigation = () => {
  return (
    <nav className="header__navigation">
      <ul className="header__navigation-links">
        <li>
          <a className="header__navigation-link" href="/">
            Пицца
          </a>
        </li>
        <li>
          <a className="header__navigation-link" href="/">
            Комбо
          </a>
        </li>
        <li>
          <a className="header__navigation-link" href="/">
            Закуски
          </a>
        </li>
        <li>
          <a className="header__navigation-link" href="/">
            Десерты
          </a>
        </li>
        <li>
          <a className="header__navigation-link" href="/">
            Напитки
          </a>
        </li>
        <li>
          <a className="header__navigation-link" href="/">
            Другие товары
          </a>
        </li>
      </ul>
    </nav>
  );
};
