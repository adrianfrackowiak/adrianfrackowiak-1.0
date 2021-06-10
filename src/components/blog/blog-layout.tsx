import React from 'react';
import BlogHeader from './blog-header';
import BlogFooter from './blog-footer';

const BlogLayout: React.FC = ({ children }) => {
    return (
        <div className="blog-container">
            <div className="blog-content">
                <BlogHeader />
                {children}
            </div>
            <BlogFooter />
        </div>
    );
};

export default BlogLayout;
