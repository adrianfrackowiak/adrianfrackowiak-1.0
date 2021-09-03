import React from 'react';
import { AiFillGithub, AiFillInstagram } from 'react-icons/ai';
import { MdEmail } from 'react-icons/md';
import { FaLinkedin } from 'react-icons/fa';

const Resume: React.FC = () => {
    return (
        <section
            className="px-4 max-w-7xl w-full mx-auto pt-20 pb-20 flex flex-col lg:px-6 "
            id="resume"
        >
            <div className="w-full flex justify-start">
                <h2 className="text-4xl lg:text-6xl font-black mb-6">Resume</h2>
            </div>

            <div className="flex flex-col justify-between w-full lg:flex-col">
                <div className="flex flex-col lg:flex-row mb-10">
                    <div className="w-full lg:w-1/2 mb-10 lg:mb-0">
                        <h3 className="text-3xl font-bold mb-4">
                            IT Experience
                        </h3>
                        <div>
                            <ul className="mb-4">
                                <li className="font-bold">
                                    JavaScript Trainee
                                </li>
                                <li>RemOT Technologies - Saragossa, Spain</li>
                                <li>March 2020</li>
                            </ul>
                            <ul>
                                <li className="font-bold">SEO Trainee</li>
                                <li>Semcore - Poznań, Poland</li>
                                <li>July - August 2019</li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2">
                        <h3 className="text-3xl font-bold mb-4">Skills</h3>
                        <div className="flex space-x-12 lg:space-x-64">
                            <ul>
                                <li>ReactJS</li>
                                <li>TypeScript</li>
                                <li>JavaScript</li>
                                <li>Gatsby / Next.js</li>
                                <li>SCSS</li>
                                <li>TailwindCSS</li>
                                <li>GraphQL</li>
                            </ul>
                            <ul>
                                <li>Rest API</li>
                                <li>Firebase Database</li>
                                <li>Firebase Auth</li>
                                <li>Git, Github</li>
                                <li>Visual Studio Code</li>
                                <li>Vercel, Netlify, Heroku</li>
                                <li>Adobe PS, AI, XD</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row mb-10">
                    <div className="w-full lg:w-1/2 mb-10 lg:mb-0">
                        <h3 className="text-3xl font-bold mb-4">Education</h3>
                        <div>
                            <ul>
                                <li className="font-bold">IT Specialist</li>
                                <li>
                                    Zespół Szkół Elektrycznych nr 2 - Poznań,
                                    Poland
                                </li>
                                <li>September 2017 - May 2021</li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2">
                        <h3 className="text-3xl font-bold mb-4">Languages</h3>
                        <div className="lang-list resume-box">
                            <ul>
                                <li>Polish - Native</li>
                                <li>English - Upper intermediate</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row">
                    <div className="w-full lg:w-1/2 mb-10 lg:mb-0">
                        <h3 className="text-3xl font-bold mb-4">
                            Open to work
                        </h3>
                        <ul className="mb-4">
                            <li>adrianfrackowiak@icloud.com</li>
                            <li>+48 664 659 926</li>
                        </ul>

                        <nav>
                            <ul className="flex space-x-4">
                                <li>
                                    <a
                                        href="https://github.com/adrianfrackowiak/"
                                        target="_blank"
                                    >
                                        <AiFillGithub />
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://www.instagram.com/adifrac_/"
                                        target="_blank"
                                    >
                                        <AiFillInstagram />
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://www.linkedin.com/in/adrianfrackowiak/"
                                        target="_blank"
                                    >
                                        <FaLinkedin />
                                    </a>
                                </li>
                                <li>
                                    <a href="mailto: adrianfrackowiak@icloud.com">
                                        <MdEmail />
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>

                    <div className="w-full lg:w-1/2">
                        <div className="resume-button">
                            <a
                                href="../../adrianfrackowiak-resume.pdf"
                                className="text-3xl font-bold mb-4"
                                download
                            >
                                Get my resume
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Resume;
