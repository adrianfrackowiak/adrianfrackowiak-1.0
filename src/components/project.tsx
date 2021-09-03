import React from 'react';

type ProjectPros = {
    title: string;
    desc: string;
    img: string;
    imgMobile: string;
    technologies: string[];
    github?: string;
    live: string;
};

const Project: React.FC<ProjectPros> = ({
    title,
    desc,
    img,
    technologies,
    github,
    live,
    imgMobile,
}) => {
    return (
        <div className="px-4 max-w-7xl w-full mx-auto flex flex-col lg:flex-row items-center lg:px-6">
            <div className="w-full lg:w-1/2 mb-12  lg:mb-6 z-10">
                <h3 className="text-4xl lg:text-6xl font-black mb-6">
                    {title}
                </h3>
                <p className="mb-6">{desc}</p>
                <ul className="flex flex-wrap mb-12">
                    {technologies.map((name) => (
                        <li className="mr-4" key={name}>
                            {' '}
                            {name}{' '}
                        </li>
                    ))}
                </ul>
                <ul className="flex space-x-4">
                    {github !== undefined ? (
                        <li>
                            <a
                                className="px-8 lg:px-12 py-3 rounded-full text-sm font-medium text-white bg-black transition-all"
                                href={github}
                                target="_blank"
                            >
                                GitHub
                            </a>
                        </li>
                    ) : (
                        ''
                    )}
                    <li>
                        <a
                            className="px-8 lg:px-12 py-3 rounded-full text-sm font-medium text-white bg-black transition-all"
                            href={live}
                            target="_blank"
                        >
                            Live
                        </a>
                    </li>
                </ul>
            </div>
            <div className="lg:absolute lg:right-0 px-4 mx-auto flex items-center justify-center w-full ">
                <img
                    src={img}
                    alt=""
                    className="hidden md:block w-640 h-auto lg:w-720 xl:w-1080 2xl:w-2/3 lg:absolute lg:-right-64 xl:-right-96 z-10"
                />
                <img
                    src={imgMobile}
                    className="md:hidden mx-10 z-10 w-300 h-auto"
                    loading="lazy"
                />
            </div>
        </div>
    );
};

export default Project;
