import React from "react";

interface NavigationType {
  className: string
}

export const Navigation = ({className}: NavigationType) => {
  return (
    <nav className={className}>
      <ul>
        <li>
          <a href="/">Пицца</a>
        </li>
        <li>
          <a href="/">Комбо</a>
        </li>
        <li>
          <a href="/">Закуски</a>
        </li>
        <li>
          <a href="/">Десерты</a>
        </li>
        <li>
          <a href="/">Напитки</a>
        </li>
        <li>
          <a href="/">Другие товары</a>
        </li>
      </ul>
    </nav>
  );
};
