import React from "react";
import { Navigation } from "../../ui/Navigation/Navigation";
import logotype from "../../../assets/images/logotype.webp";

export const Header = () => {
  return (
    <header className="header">
      <div className="header__item">
        <a href="/">
          <img
            className="header__logotype"
            src={logotype}
            width="249px"
            height="48px"
            alt="logotype"
          />
        </a>
        <a className="header__contact" href="tel: 8 800 302-00-60">
          <p className="header__telephone">8 800 302-00-60</p>
          <p>Звонок бесплатный</p>
        </a>
      </div>
      <div className="header__item">
        <Navigation className="header__navigation navigation" />
        <a
          className="header__button button"
          onClick={() => console.log("hi")}
          href="/"
        >
          Корзина
        </a>
      </div>
    </header>
  );
};
