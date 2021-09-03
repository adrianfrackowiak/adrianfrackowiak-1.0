import React from 'react';
import BlogHeader from './blog-header';
import Footer from '../footer';

const BlogLayout: React.FC = ({ children }) => {
    return (
        <div className="antialiased min-h-screen text-base lg:text-lg flex flex-col">
            <div className="flex flex-col items-center justify-center min-h-screen">
                <BlogHeader />
                {children}
            </div>
            <Footer />
        </div>
    );
};

export default BlogLayout;
