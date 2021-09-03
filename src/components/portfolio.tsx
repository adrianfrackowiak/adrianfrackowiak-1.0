import React, { useState } from 'react';
import Project from '../components/project';

interface Project {
    title: string;
    desc: string;
    img: string;
    mobile: string;
    technologies: string[];
    github?: string;
    live: string;
}

const Projects: Project[] = [
    {
        title: 'WrapTown - business website',
        desc: `WrapTown is the business website for a car wrapping company with a few subpages and a cool design.`,
        img: '../../wraptown.webp',
        mobile: '../../wraptown-mobile.webp',
        technologies: ['ReactJS', 'TypeScript', 'Gatsby', 'TailwindCSS'],
        live: 'https://wraptown.pl/',
    },
    {
        title: 'Hogsmeade Station',
        desc: `Hogsmeade Station is the app for Harry Potter fans, You can choose your favorite wizard or spell, discover your Hogwart's House with Sorting Hat Ceremony and track your books reading progress.`,
        img: '../../hogsmeade.webp',
        mobile: '../../hogsmeade-mobile.webp',
        technologies: [
            'ReactJS',
            'TypeScript',
            'Axios',
            'Firebase Database',
            'Firebase Auth',
            'Rest API',
            'SCSS',
        ],
        github: 'https://github.com/adrianfrackowiak/Hogsmeade-Station',
        live: 'https://hogsmeade-station.vercel.app/',
    },
    {
        title: 'Adrian Frąckowiak',
        desc: `It is my personal website where you can see my portfolio and read something about me in my blog section.`,
        img: '../../adrianfrackowiak.webp',
        mobile: '../../adrianfrackowiak-mobile.webp',
        technologies: ['ReactJS', 'TypeScript', 'Gatsby', 'GraphQL', 'SCSS'],
        github: 'https://github.com/adrianfrackowiak/adrianfrackowiak',
        live: 'https://adrianfrackowiak.pl/',
    },
    {
        title: 'Pomi',
        desc: `Pomi is the app that used a customizable pomodoro timer. It can help you to stay focus and be more productive. It's your choice how long you want to study.`,
        img: '../../pomi.webp',
        mobile: '../../pomi-mobile.webp',
        technologies: ['ReactJS', 'Gatsby', 'GraphQL', 'SCSS'],
        github: 'https://github.com/adrianfrackowiak/Pomi---Pomodoro-Timer',
        live: 'https://pomi-timer.netlify.app/',
    },
];

const Portfolio: React.FC = () => {
    const [projectsNav, setProjectsNav] = useState<number>(0);
    const [projectColor, setProjectColor] = useState<string>(
        'bg-projects-wraptown'
    );

    return (
        <section
            className="relative w-full pt-40 pb-20 flex flex-col items-center justify-start"
            id="portfolio"
        >
            <div className="px-4 max-w-7xl w-full mx-auto lg:px-6">
                <nav className="flex justify-center sm:justify-start">
                    <ul className="flex flex-row space-x-16 mb-10">
                        <li>
                            <button
                                onClick={() => {
                                    setProjectsNav(0);
                                    setProjectColor('bg-projects-wraptown');
                                }}
                                className={
                                    projectsNav === 0
                                        ? 'font-black text-black'
                                        : 'font-bold text-gray-300'
                                }
                            >
                                1
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => {
                                    setProjectsNav(1);
                                    setProjectColor('bg-projects-hogsmeade');
                                }}
                                className={
                                    projectsNav === 1
                                        ? 'font-black text-black'
                                        : 'font-bold text-gray-300'
                                }
                            >
                                2
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => {
                                    setProjectsNav(2);
                                    setProjectColor('bg-black');
                                }}
                                className={
                                    projectsNav === 2
                                        ? 'font-bold text-black'
                                        : 'font-bold text-gray-300'
                                }
                            >
                                3
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => {
                                    setProjectsNav(3);
                                    setProjectColor('bg-projects-pomi');
                                }}
                                className={
                                    projectsNav === 3
                                        ? 'font-black text-black'
                                        : 'font-bold text-gray-300'
                                }
                            >
                                4
                            </button>
                        </li>
                    </ul>
                </nav>
            </div>
            <Project
                title={Projects[projectsNav].title}
                desc={Projects[projectsNav].desc}
                img={Projects[projectsNav].img}
                technologies={Projects[projectsNav].technologies}
                github={Projects[projectsNav].github}
                live={Projects[projectsNav].live}
                imgMobile={Projects[projectsNav].mobile}
            />
            <div
                className={
                    'w-full h-64 -mt-32 lg:mt-12 z-0 transition ease-in-out duration-750 ' +
                    projectColor
                }
            ></div>
        </section>
    );
};

export default Portfolio;
