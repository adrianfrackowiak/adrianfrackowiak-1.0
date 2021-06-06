import React from 'react';

const Resume = () => {
    return (
        <section className="resume">
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
                            <li>ZSE2</li>
                        </ul>
                    </div>
                </div>
                <div className="resume-right">
                    <h3>Skills</h3>
                    <div className="skills-list">
                        <ul>
                            <li>SCSS</li>
                            <li>JS ES6</li>
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
                </div>
            </div>
        </section>
    );
};

export default Resume;
