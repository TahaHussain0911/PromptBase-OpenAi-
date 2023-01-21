import React from "react";
import './Footer.css'
const Footer = () => {
  return (
    <div className="footer-container">
      <p>© PromptBase 2023</p>
      <div className="links">
        <span>FAQ</span>
        <span>Contact</span>
        <span>Privacy</span>
      </div>
      <div className="icons">
        <a href="https://www.instagram.com/promptbase/" target="_blank" rel="noreferrer">
          <i class="fa-brands fa-instagram"></i>
        </a>
        <a href="https://www.instagram.com/promptbase/" target="_blank" rel="noreferrer">
          <i class="fa-brands fa-twitter"></i>
        </a>
      </div>
    </div>
  );
};

export default Footer;
