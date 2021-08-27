import React from 'react';
import scrollTo from 'gatsby-plugin-smoothscroll';

const Main: React.FC = () => {
    return (
        <main className="px-4 w-full mx-auto mt-20 mb-20 flex flex-col flex-wrap flex-grow justify-center items-center lg:px-6 lg:flex-row">
            <div className="w-full flex flex-col items-center">
                <img src="../../heroimg.png" alt="" className="mb-10" />
                <h2 className="text-4xl mb-10 font-extrabold text-black xl:text-6xl leading-tight xl:leading-snug text-center lg:w-4/5">
                    I'm creating beautiful websites. Got a project? Let's talk!
                </h2>
                <p className="text-center mb-10 lg:w-3/5">
                    Hi! I'm Adrian! I am a Front End Developer. The head
                    technologies I used are ReactJS and TypeScript. I love
                    programming and creating new, beautiful websites and web
                    apps. Besides, I like every board sport like skateboarding,
                    snowboarding, wakeboarding and surfing. If you want to know
                    more about me, scroll down.
                </p>
                <button
                    onClick={() => scrollTo('#about')}
                    className="px-5 lg:px-12 py-4 rounded-full text-base font-medium text-white bg-black transition-all"
                >
                    Explore now
                </button>
            </div>
        </main>
    );
};

export default Main;
