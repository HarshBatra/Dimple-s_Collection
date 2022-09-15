import React from "react";
import { AiFillInstagram, AiOutlineWhatsApp } from "react-icons/ai";

const Footer = () => {
  var year = new Date().getFullYear();
  return (
    <div className="footer-container">
      <p> {year} Dimple's Collection All rights reserverd</p>
      <p className="icons">
        <AiFillInstagram />
        <AiOutlineWhatsApp />
      </p>
    </div>
  );
};

export default Footer;
