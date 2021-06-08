import React from 'react';
import { AiFillGithub, AiFillInstagram } from 'react-icons/ai';
import { MdEmail } from 'react-icons/md';
import { FaLinkedin } from 'react-icons/fa';

const Resume: React.FC = () => {
    return (
        <section className="resume" id="resume">
            <div className="resume-title">
                <h2>Resume</h2>
            </div>
            <div className="resume-content">
                <div className="resume-left">
                    <h3>IT experience</h3>
                    <div className="works-list">
                        <ul>
                            <li className="works-title">JavaScript Trainee</li>
                            <li className="works-place">
                                RemOT Technologies - Saragossa, Spain
                            </li>
                            <li className="works-date">March 2020</li>
                        </ul>
                        <ul>
                            <li className="works-title">SEO Trainee</li>
                            <li className="works-place">
                                Semcore - Poznań, Poland
                            </li>
                            <li className="works-date">July - August 2019</li>
                        </ul>
                    </div>
                    <h3>Education</h3>
                    <div className="education-list">
                        <ul>
                            <li className="edu-title">IT Specialist</li>
                            <li className="edu-place">
                                Zespół Szkół Elektrycznych nr 2 - Poznań, Poland
                            </li>
                            <li className="edu-date">
                                September 2017 - May 2021
                            </li>
                        </ul>
                    </div>
                    <h3>Open to work</h3>
                    <ul>
                        <li>adrianfrackowiak@icloud.com</li>
                        <li>+48 664 659 926</li>
                    </ul>
                    <nav className="nav-socials">
                        <ul>
                            <li>
                                <AiFillGithub />
                            </li>
                            <li>
                                <AiFillInstagram />
                            </li>
                            <li>
                                <FaLinkedin />
                            </li>
                            <li>
                                <MdEmail />
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="resume-right">
                    <h3>Skills</h3>
                    <div className="skills-list">
                        <ul>
                            <li>SCSS</li>
                            <li>JAVASCRIPT</li>
                            <li>REACT JS</li>
                            <li>TYPESCRIPT</li>
                            <li>GATSBY</li>
                            <li>GRAPHQL</li>
                        </ul>
                        <ul>
                            <li>GIT</li>
                            <li>VSCODE</li>
                            <li>ADOBE PHOTOSHOP</li>
                            <li>ADOBE ILLUSTRATOR</li>
                            <li>ADOBE XD</li>
                        </ul>
                    </div>
                    <h3>Languages</h3>
                    <div className="lang-list">
                        <ul>
                            <li>Polish - Native</li>
                            <li>English - Upper intermediate</li>
                        </ul>
                    </div>
                    <div className="resume-button">
                        <a href="/" className="btn">
                            Get my resume
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Resume;
