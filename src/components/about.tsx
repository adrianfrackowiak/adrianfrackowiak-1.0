import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

const About: React.FC = () => {
    return (
        <section className="about">
            <div className="about-img">
                <StaticImage
                    src="../images/aboutimg.png"
                    alt="about - adrianfrackowiak"
                    quality={95}
                />
            </div>
            <div className="about-desc">
                <h1>
                    Adrian Frąckowiak 🌊
                    <br />
                    Front End Developer
                </h1>
                <p>
                    I'm Adrian and I'm 19 years old Front End Developer. My main
                    technology is React. I love programming and creating new,
                    beautiful websites and web apps. Besides, I like every board
                    sport like skate, snow, wake, and surf. If you want to know
                    me better, check my social media.
                </p>
            </div>
        </section>
    );
};

export default About;
