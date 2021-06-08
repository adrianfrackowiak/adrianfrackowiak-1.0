import React from 'react';
import scrollTo from 'gatsby-plugin-smoothscroll';

const Header: React.FC = () => {
    return (
        <header>
            <img src="../../icon.png" alt="logo - adrianfrackowiak" />
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
                </ul>
            </nav>
        </header>
    );
};

export default Header;
