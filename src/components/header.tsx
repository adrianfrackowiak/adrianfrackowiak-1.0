import React from 'react';

const Header: React.FC = () => {
    return (
        <header>
            <img src="../../icon.png" alt="logo - adrianfrackowiak" />
            <nav className="nav-links">
                <ul>
                    <li>
                        <a href="/">About</a>
                    </li>
                    <li>
                        <a href="/">Portfolio</a>
                    </li>
                    <li>
                        <a href="/">Contact</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
