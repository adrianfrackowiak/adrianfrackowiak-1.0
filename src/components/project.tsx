import React from 'React';

type ProjectPros = {
    title: string;
    desc: string;
    img: string;
    technologies: string[];
    github: string;
    live: string;
};

const Project: React.FC<ProjectPros> = ({
    title,
    desc,
    img,
    technologies,
    github,
    live,
}) => {
    return (
        <div className="project">
            <div
                className="project-desc"
                data-sal="slide-up"
                data-sal-delay="100"
                data-sal-duration="1200"
                data-sal-easing="ease-out-bounce"
            >
                <h3>{title}</h3>
                <p>{desc}</p>
                <ul>
                    {technologies.map((name) => (
                        <li key={name}> {name} </li>
                    ))}
                </ul>
                <ul>
                    <li>
                        <a href={github} target="_blank">
                            GitHub
                        </a>
                    </li>
                    <li>
                        <a href={live} target="_blank">
                            Live
                        </a>
                    </li>
                </ul>
            </div>
            <div
                className="project-img"
                data-sal="slide-up"
                data-sal-delay="100"
                data-sal-duration="1200"
                data-sal-easing="ease-out-bounce"
            >
                <img src={img} alt="about - adrianfrackowiak" />
            </div>
        </div>
    );
};

export default Project;
