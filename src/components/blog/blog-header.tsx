import React from 'react';
import { Link } from 'gatsby';

const BlogHeader: React.FC = () => {
    return (
        <header>
            <img src="../../icon.png" alt="logo - adrianfrackowiak" />
            <nav className="nav-links">
                <ul>
                    <li>
                        <button>
                            <Link to="/">Portfolio</Link>
                        </button>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default BlogHeader;
