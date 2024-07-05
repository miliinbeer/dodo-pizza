import React from "react";
import google_play from "../../../../shared/assets/images/links/google-play.webp";
import apple_store from "../../../../shared/assets/images/links/apple-store.webp";

export const FooterLinks = () => {
  return (
    <div className="footer__links">
      <div className="footer__links-apps">
        <a href="/" target="_blank">
          <img src={google_play} alt="google-play" />
        </a>
        <a href="/" target="_blank">
          <img src={apple_store} alt="apple-store" />
        </a>
      </div>
      <a
        className="footer__links-telephone"
        href="tel: 8 800 302-00-60"
        target="_blank"
      >
        <p>8 800 302-00-60</p>
        <p>Звонок бесплатный</p>
      </a>
      <a
        className="footer__links-mail"
        href="mailto: feedback@dodopizza.com"
        rel="noopener"
        target="_blank"
      >
        feedback@dodopizza.com
      </a>
    </div>
  );
};
