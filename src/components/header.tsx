import React, { useState } from 'react';
import { Link } from 'gatsby';
import scrollTo from 'gatsby-plugin-smoothscroll';
import { FaTimes, FaBars } from 'react-icons/fa';

const Header: React.FC = () => {
    const [isBurger, setIsBurger] = useState<boolean>(false);

    return (
        <header className="relative px-4 w-full mx-auto flex items-center justify-between h-24 lg:px-6">
            <div>
                <Link to="/">
                    <img src="../../icon.png" alt="logo - adrianfrackowiak" />
                </Link>
            </div>
            <nav>
                <ul className="flex items-center space-x-10">
                    <li>
                        <button className="py-3 rounded-full text-base font-medium transition-all">
                            <Link to="/blog">Blog</Link>
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() => scrollTo('#about')}
                            className="px-5 lg:px-8 py-3 rounded-full text-sm font-medium text-white bg-black transition-all"
                        >
                            Get in touch
                        </button>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
