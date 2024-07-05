import React from "react";
import logotype from "../../shared/assets/icons/logotype.svg";
import { FooterNavigation } from "./content/footer-navigation";
import { FooterInfo } from "./content/footer-info";
import { FooterLinks } from "./content/footer-links";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__items">
          <div className="footer__item">
            <FooterNavigation />
            <FooterInfo />
          </div>
          <FooterLinks />
        </div>
        <div className="footer__contacts">
          <div className="footer__contacts-logotype">
            <img src={logotype} alt="logotype" />
            <p>© 2021</p>
          </div>
          <div className="footer__contacts-links">
            <a href="/">Правовая информация</a>
            <a href="/">Калорийность и состав</a>
            <a href="/">Помощь</a>
          </div>
          <div className="footer__contacts-contacts">
            <div className="footer__contacts-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M17.1875 2.1875H2.8125C2.4668 2.1875 2.1875 2.4668 2.1875 2.8125V17.1875C2.1875 17.5332 2.4668 17.8125 2.8125 17.8125H17.1875C17.5332 17.8125 17.8125 17.5332 17.8125 17.1875V2.8125C17.8125 2.4668 17.5332 2.1875 17.1875 2.1875ZM15.3828 6.74805H14.1348C13.1562 6.74805 12.9668 7.21289 12.9668 7.89648V9.40234H15.3027L14.998 11.7598H12.9668V17.8125H10.5312V11.7617H8.49414V9.40234H10.5312V7.66406C10.5312 5.64648 11.7637 4.54688 13.5645 4.54688C14.4277 4.54688 15.168 4.61133 15.3848 4.64062V6.74805H15.3828Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
