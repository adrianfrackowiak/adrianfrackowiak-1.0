import React from 'react';
import Project from '../components/project';

interface Project {
    title: string;
    desc: string;
    img: string;
    technologies: string[];
}

const Pomi: Project = {
    title: 'Pomi - pomodoro timer app',
    desc: `Pomi is the app used a customizable pomodoro timer. It can help you to stay focus and be more productivity. It's your choice how long you want to study.`,
    img: '../../pomi.png',
    technologies: ['react js', 'gatsby', 'graphql', 'scss', 'javascript'],
};

const Portfolio: React.FC = () => {
    return (
        <section className="portfolio">
            <Project
                title={Pomi.title}
                desc={Pomi.desc}
                img={Pomi.img}
                technologies={Pomi.technologies}
            />
        </section>
    );
};

export default Portfolio;
