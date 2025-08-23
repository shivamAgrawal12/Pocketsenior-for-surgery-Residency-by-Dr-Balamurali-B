import React from "react";
import { useNavigate } from "react-router-dom";
import smalllogo from "../assets/logo.png";
import { FaEnvelope, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import "./Style.css";

const Footer = () => {
  const navigate = useNavigate();

  const handleChapterClick = (path) => {
    setDropdownOpen(false);
    navigate(path);
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <img src={smalllogo} alt="Logo" id="smalllogo" />
        </div>

      <div className="footer-bottom">
        <p>© 2025. All rights reserved.</p>
      </div>

        <div className="footer-social">
          <a href="https://www.instagram.com/dr.balamuralikrishnan/" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=balamuralikrishna97@gmail.com" target="_blank" rel="noopener noreferrer">
            <FaEnvelope />
          </a>
          <a href="https://www.instagram.com/__thetamilsurgeon.in.ranchi__/" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
        </div>
      </div>      
    </footer>
  );
};

export default Footer;
