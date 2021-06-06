import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

const Header: React.FC = () => {
    return (
        <header>
            <StaticImage
                src="../images/icon.png"
                alt="logo - adrianfrackowiak"
                quality={95}
                data-sal="slide-up"
                data-sal-delay="300"
                data-sal-duration="2000"
                data-sal-easing="ease-out-back"
            />
            <nav className="nav-links">
                <ul>
                    <li>About</li>
                    <li>Portfolio</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
