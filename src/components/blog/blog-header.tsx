import React from 'react';
import { Link } from 'gatsby';

const BlogHeader: React.FC = () => {
    return (
        <header className="relative px-4 w-full max-w-7xl mx-auto flex items-center justify-between h-24 lg:px-6">
            <Link to="/blog">
                <img src="../../icon.png" alt="logo - adrianfrackowiak" />
            </Link>
            <nav>
                <ul>
                    <li>
                        <button className="px-5 lg:px-8 py-3 rounded-full text-sm font-medium text-white bg-black transition-all">
                            <Link to="/">Go back to home page</Link>
                        </button>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default BlogHeader;
