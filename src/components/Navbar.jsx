import React, { useRef, useState } from 'react';
import { useNavigate } from "react-router-dom";
import logo from '../assets/logo.png';
import testimonialsData from "./testimonials";
import "./Style.css";

const Navbar = () => {
    const homeRef = useRef(null);
    const aboutRef = useRef(null);
    const chaptersRef = useRef(null);
    const reachOutRef = useRef(null);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    const toggleMenu = () => setIsOpen(!isOpen);

    const toggleDropdown = (e) => {
        e.preventDefault();
        setDropdownOpen(!dropdownOpen);
    };

    const handleChapterClick = (path) => {
        setDropdownOpen(false);
        setIsOpen(false);
    
        window.scrollTo({ top: 0, behavior: "smooth" });
    
        setTimeout(() => {
            navigate(path);
        }, 300); 
    };

    return (
        <nav id="navbar">
            <div id="nav-div">
                <img src={logo} alt="Logo" className="App-logo" onClick={() => handleChapterClick("/")} />

                <button className="menu-toggle" onClick={toggleMenu}>
                    {isOpen ? "✖" : "☰"}
                </button>

                <ul className={`nav-links ${isOpen ? "active" : ""}`} id='group-nav'>
                    <li><a className="head" onClick={() => handleChapterClick("/")}>HOME</a></li>
                    <li><a className="head" onClick={() => handleChapterClick("/about")}>ABOUT</a></li>
                    <li className="dropdown-container">
                        <a className="head" onClick={toggleDropdown}>CHAPTERS ▾</a>
                        {dropdownOpen && (
                            <ul className="dropdown-menu">
                                {testimonialsData.map((chapter) => (
                                    <li key={chapter.id || chapter.name}>
                                        <button onClick={() => handleChapterClick(`/chapter/${chapter.id || chapter.chapterId}`)}>
                                            {chapter.name}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                </ul>

                <div className="group">
                    <div className="head" onClick={() => handleChapterClick("/")}>HOME</div>
                    <div className="head" onClick={() => handleChapterClick("/about")}>ABOUT</div>
                    <div className="dropdown-container">
                        <div className="head" onClick={toggleDropdown}>CHAPTERS <span className='drop-chap'>▾</span></div>
                        {dropdownOpen && (
                            <ul className="dropdown-menu">
                                {testimonialsData.map((chapter) => (
                                    <li key={chapter.id || chapter.name}>
                                        <button onClick={() => handleChapterClick(`/chapter/${chapter.id || chapter.chapterId}`)}>
                                            {chapter.name}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
