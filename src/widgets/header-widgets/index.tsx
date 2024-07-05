import { header_navigation } from "../../shared/assets/data/data";
import logotype from "../../shared/assets/images/logotype.webp";

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
        <nav className="header__navigation">
          <ul className="header__navigation-links">
            {header_navigation.map((el, i) => (
              <li key={`${el.title}-${i}`}>
                <a className="header__navigation-link" href={el.href}>
                  {el.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <a
          className="header__button button-primary"
          onClick={() => console.log("hi")}
          href="/"
        >
          Корзина
        </a>
      </div>
    </header>
  );
};
