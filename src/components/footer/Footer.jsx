import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Quiroga</h1>
        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>
          <li>
            <a href="#portfolio" className="footer__link">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="footer__link">
              Contact
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="https://github.com/Lucas-Quiroga"
            className="footer__social-link"
            target="_blank"
          >
            <i class="bx bxl-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/lucas-quiroga-/"
            className="footer__social-link"
            target="_blank"
          >
            <i class="bx bxl-linkedin"></i>
          </a>
          <a
            href="mailto:quiroga.lucasoffice@gmail.com"
            className="footer__social-link"
            target="_blank"
          >
            <i class="bx bx-envelope"></i>
          </a>
        </div>
        <span className="footer__copy">
          &#169; Quiroga Lucas. All rights reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
