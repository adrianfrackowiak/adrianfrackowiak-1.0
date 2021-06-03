import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';

const Layout: React.FC = ({ children }) => {
    return (
        <div className="container">
            <div className="content">
                <Header />
                {children}
            </div>
            <Footer />
        </div>
    );
};

export default Layout;
