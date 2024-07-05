import React from 'react'
import { footer_links } from "../../../../shared/assets/data/data";


export const FooterNavigation = () => {
  return (
    <div className="footer__navigation">
      {footer_links.map((el) => (
        <div>
          <p className="footer__navigation-title">{el.title}</p>
          <ul className="footer__navigation-links">
            {el.links.map((el) => (
              <li>
                <a className="footer__navigation-link" href={el?.href}>
                  {el?.link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
