import React from 'react';

const About: React.FC = () => {
    return (
        <section className="about" id="about">
            <div
                className="about-img"
                data-sal="slide-up"
                data-sal-delay="100"
                data-sal-duration="2000"
                data-sal-easing="ease-out-bounce"
            >
                <img src="../../aboutimg.png" alt="about - adrianfrackowiak" />
            </div>
            <div className="about-desc">
                <h1>Adrian Frąckowiak, Front End Developer</h1>
                <p>
                    I'm Adrian and I'm 19 years old Front End Developer. My main
                    technology is React. I love programming and creating new,
                    beautiful websites and web apps. Besides, I like every board
                    sport like skate, snow, wake, and surf.
                </p>
            </div>
        </section>
    );
};

export default About;
