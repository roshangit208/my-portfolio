
import React, { useState } from 'react';
import './Navbar.css';

export default function Navbar() {
    const [activeItem, setActiveItem] = useState('HOME');

    const handleItemClick = (itemName) => {
        setActiveItem(itemName);
    };

    return (
        <>
            <div className="shadow-lg p-3 mb-5 rounded">
                <nav className="navbar navbar-expand-lg navbar-light bg-*">
                    <div className="container">
                        <a className="navbar-brand" href="/" style={{fontFamily: "'Protest Riot', sans-serif"}}>
                            <h4>&lt; ROSHAN&#47;&gt;</h4>
                        </a>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                            <ul className="navbar-nav mb-2 mb-lg-0">
                                <li className={`nav-item ${activeItem === 'HOME' ? 'mr-10' : ''}`}>
                                    <a
                                        className={`nav-link ${activeItem === 'HOME' ? 'active' : ''}`}
                                        onClick={() => handleItemClick('HOME')}
                                        href="/"
                                    >
                                        HOME
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a
                                        className={`nav-link ${activeItem === 'ABOUT ME' ? 'active' : ''}`}
                                        onClick={() => handleItemClick('ABOUT ME')}
                                        href="#about-me"
                                    >
                                        ABOUT ME
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a
                                        className={`nav-link ${activeItem === 'PORTFOLIO' ? 'active' : ''}`}
                                        onClick={() => handleItemClick('PORTFOLIO')}
                                        href="#portfolio"
                                    >
                                        PORTFOLIO
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a
                                        className={`nav-link ${activeItem === 'EXPERIENCE' ? 'active' : ''}`}
                                        onClick={() => handleItemClick('EXPERIENCE')}
                                        href="#toolsandtech"
                                    >
                                        TECH&TOOLS
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a
                                        className={`nav-link ${activeItem === 'SERVICES' ? 'active' : ''}`}
                                        onClick={() => handleItemClick('SERVICES')}
                                        href="#services"
                                    >
                                        SERVICES
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    );
}
