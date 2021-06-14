import React, { useState } from 'react';
import Project from '../components/project';

interface Project {
    title: string;
    desc: string;
    img: string;
    technologies: string[];
    github: string;
    live: string;
}

const Pomi: Project = {
    title: 'Pomi - pomodoro timer app',
    desc: `Pomi is the app used a customizable pomodoro timer. It can help you to stay focus and be more productivity. It's your choice how long you want to study.`,
    img: '../../pomi.png',
    technologies: ['react js', 'gatsby', 'graphql', 'scss', 'javascript'],
    github: 'https://github.com/adrianfrackowiak/Pomi---Pomodoro-Timer',
    live: 'https://pomi-timer.netlify.app/',
};

const Portfolio: React.FC = () => {
    return (
        <section className="portfolio" id="portfolio">
            <Project
                title={Pomi.title}
                desc={Pomi.desc}
                img={Pomi.img}
                technologies={Pomi.technologies}
                github={Pomi.github}
                live={Pomi.live}
            />
            <div className="bg-box"></div>
        </section>
    );
};

export default Portfolio;
