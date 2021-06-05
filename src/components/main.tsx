import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

const Main = () => {
    return (
        <main>
            <StaticImage
                src="../images/heroimg.png"
                alt="hero - adrianfrackowiak"
                quality={95}
                className="hero-img"
            />
            <p>
                Hi! I'm Adrian!
                <br /> If you want to know more about me, scroll down.
            </p>
            <h2>
                I'm creating beautiful websites.
                <br /> Got a project? Let's talk!
            </h2>
            <button>CONTACT</button>
        </main>
    );
};

export default Main;
