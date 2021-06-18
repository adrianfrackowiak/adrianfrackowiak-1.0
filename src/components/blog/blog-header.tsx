import React from 'react';
import { Link } from 'gatsby';

const BlogHeader: React.FC = () => {
    return (
        <header className="blog-header">
            <Link to="/blog">
                <img src="../../icon.png" alt="logo - adrianfrackowiak" />
            </Link>
            <nav className="blog-nav">
                <ul>
                    <li>
                        <button>
                            <Link to="/">Go back to home page</Link>
                        </button>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default BlogHeader;
