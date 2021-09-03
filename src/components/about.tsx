import React from 'react';
import {
    SiTypescript,
    SiGatsby,
    SiJavascript,
    SiReact,
    SiFirebase,
    SiGraphql,
    SiTailwindcss,
    SiNextDotJs,
    SiGit,
    SiGithub,
    SiVisualstudiocode,
    SiNetlify,
    SiHeroku,
    SiAdobexd,
    SiAdobephotoshop,
    SiAdobeillustrator,
} from 'react-icons/si';
import { IoLogoVercel } from 'react-icons/io5';

const About: React.FC = () => {
    return (
        <section
            className="px-4 max-w-7xl mx-auto pt-20 pb-20 flex flex-col flex-wrap justify-center items-center lg:px-6 lg:flex-row"
            id="about"
        >
            <div className="w-full flex sm:justify-center lg:justify-start lg:w-1/2 mb-10 lg:mb-0">
                <img src="../../aboutimg.png" alt="about - adrianfrackowiak" />
            </div>
            <div className="w-full lg:w-1/2">
                <h1 className="text-4xl lg:text-6xl font-black mb-6 break-word">
                    Adrian Frąckowiak, Front End Developer
                </h1>
                <p className="lg:text-xl mb-6">
                    I'm Adrian and I am a Front End Developer.The head
                    technologies I used are ReactJS and TypeScript. I love
                    programming and creating new, beautiful websites and web
                    apps. Besides, I like every board sport like skateboarding,
                    snowboarding, wakeboarding, and surfing.
                </p>
                <ul className="flex flex-wrap justify-start space-y-2">
                    <li className="mr-4 mt-2">
                        <span>
                            <SiReact />
                        </span>
                    </li>
                    <li className="mr-4">
                        <span>
                            <SiJavascript />
                        </span>
                    </li>
                    <li className="mr-4">
                        <span>
                            <SiTypescript />
                        </span>
                    </li>
                    <li className="mr-4">
                        <span>
                            <SiGatsby />
                        </span>
                    </li>
                    <li className="mr-4">
                        <span>
                            <SiNextDotJs />
                        </span>
                    </li>
                    <li className="mr-4">
                        <span>
                            <SiTailwindcss />
                        </span>
                    </li>
                    <li className="mr-4">
                        <span>
                            <SiGraphql />
                        </span>
                    </li>
                    <li className="mr-4">
                        <span>
                            <SiFirebase />
                        </span>
                    </li>
                    <li className="mr-4">
                        <span>
                            <SiGit />
                        </span>
                    </li>
                    <li className="mr-4">
                        <span>
                            <SiGithub />
                        </span>
                    </li>
                    <li className="mr-4">
                        <span>
                            <IoLogoVercel />
                        </span>
                    </li>
                    <li className="mr-4">
                        <span>
                            <SiNetlify />
                        </span>
                    </li>
                    <li className="mr-4">
                        <span>
                            <SiHeroku />
                        </span>
                    </li>
                    <li className="mr-4">
                        <span>
                            <SiVisualstudiocode />
                        </span>
                    </li>
                    <li className="mr-4">
                        <span>
                            <SiAdobephotoshop />
                        </span>
                    </li>
                    <li className="mr-4">
                        <span>
                            <SiAdobeillustrator />
                        </span>
                    </li>
                    <li className="mr-4">
                        <span>
                            <SiAdobexd />
                        </span>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default About;
