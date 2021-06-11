import React from 'react';
import { Link } from 'gatsby';
import scrollTo from 'gatsby-plugin-smoothscroll';

const Header: React.FC = () => {
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
        </header>
    );
};

export default Header;
