import React from 'react';

const Main: React.FC = () => {
    return (
        <main>
            <img
                src="../../heroimg.png"
                alt="hero - adrianfrackowiak"
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
