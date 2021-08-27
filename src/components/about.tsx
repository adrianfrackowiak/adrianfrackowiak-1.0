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
            <div className="w-full lg:w-1/2">
                <img src="../../aboutimg.png" alt="about - adrianfrackowiak" />
            </div>
            <div className="w-full lg:w-1/2">
                <h1 className="text-6xl font-black mb-6">
                    Adrian Frąckowiak, Front End Developer
                </h1>
                <p className="text-xl mb-6">
                    I'm Adrian and I am a Front End Developer.The head
                    technologies I used are ReactJS and TypeScript. I love
                    programming and creating new, beautiful websites and web
                    apps. Besides, I like every board sport like skateboarding,
                    snowboarding, wakeboarding, and surfing.
                </p>
                <ul className="flex space-x-4">
                    <li>
                        <span>
                            <SiReact />
                        </span>
                    </li>
                    <li>
                        <span>
                            <SiJavascript />
                        </span>
                    </li>
                    <li>
                        <span>
                            <SiTypescript />
                        </span>
                    </li>
                    <li>
                        <span>
                            <SiGatsby />
                        </span>
                    </li>
                    <li>
                        <span>
                            <SiNextDotJs />
                        </span>
                    </li>
                    <li>
                        <span>
                            <SiTailwindcss />
                        </span>
                    </li>
                    <li>
                        <span>
                            <SiGraphql />
                        </span>
                    </li>
                    <li>
                        <span>
                            <SiFirebase />
                        </span>
                    </li>
                    <li>
                        <span>
                            <SiGit />
                        </span>
                    </li>
                    <li>
                        <span>
                            <SiGithub />
                        </span>
                    </li>
                    <li>
                        <span>
                            <IoLogoVercel />
                        </span>
                    </li>
                    <li>
                        <span>
                            <SiNetlify />
                        </span>
                    </li>
                    <li>
                        <span>
                            <SiHeroku />
                        </span>
                    </li>
                    <li>
                        <span>
                            <SiVisualstudiocode />
                        </span>
                    </li>
                    <li>
                        <span>
                            <SiAdobephotoshop />
                        </span>
                    </li>
                    <li>
                        <span>
                            <SiAdobeillustrator />
                        </span>
                    </li>
                    <li>
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
