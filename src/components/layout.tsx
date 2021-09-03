import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import Main from './main';

const Layout: React.FC = ({ children }) => {
    return (
        <div className="antialiased min-h-screen text-base lg:text-lg flex flex-col">
            <div className="flex flex-col flex-grow items-center">
                <div className="flex flex-col justify-center min-h-screen max-w-7xl">
                    <Header />
                    <Main />
                </div>
                {children}
            </div>
            <Footer />
        </div>
    );
};

export default Layout;
