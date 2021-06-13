import React, { useState } from 'react';
import { Link } from 'gatsby';
import scrollTo from 'gatsby-plugin-smoothscroll';
import { FaTimes, FaBars } from 'react-icons/fa';

const Header: React.FC = () => {
    const [isBurger, setIsBurger] = useState<boolean>(false);

    const handleBurger = () => {
        isBurger ? setIsBurger(false) : setIsBurger(true);
    };

    return (
        <header>
            <Link to="/">
                <img src="../../icon.png" alt="logo - adrianfrackowiak" />
            </Link>
            <nav className="nav-links">
                <ul>
                    <li>
                        <button onClick={() => scrollTo('#about')}>
                            About
                        </button>
                    </li>
                    <li>
                        <button onClick={() => scrollTo('#resume')}>
                            Resume
                        </button>
                    </li>
                    <li>
                        <button onClick={() => scrollTo('#portfolio')}>
                            Portfolio
                        </button>
                    </li>
                    <li>
                        <button onClick={() => scrollTo('#contact')}>
                            Contact
                        </button>
                    </li>
                    <li>
                        <button>
                            <Link to="/blog">Blog</Link>
                        </button>
                    </li>
                </ul>
            </nav>
            {isBurger ? (
                <>
                    <FaTimes onClick={handleBurger} className="ham-nav" />
                    <nav className="mobile-nav">
                        <ul>
                            <li>
                                <button
                                    onClick={() => {
                                        scrollTo('#about');
                                        handleBurger();
                                    }}
                                >
                                    About
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => {
                                        scrollTo('#resume');
                                        handleBurger();
                                    }}
                                >
                                    Resume
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => {
                                        scrollTo('#portfolio');
                                        handleBurger();
                                    }}
                                >
                                    Portfolio
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => {
                                        scrollTo('#contact');
                                        handleBurger();
                                    }}
                                >
                                    Contact
                                </button>
                            </li>
                            <li>
                                <button>
                                    <Link to="/blog">Blog</Link>
                                </button>
                            </li>
                        </ul>
                    </nav>
                </>
            ) : (
                <FaBars onClick={handleBurger} className="ham-nav" />
            )}
        </header>
    );
};

export default Header;
