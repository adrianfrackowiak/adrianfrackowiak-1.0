import React from 'React';

type ProjectPros = {
    title: string;
    desc: string;
    img: string;
    technologies: string[];
};

const Project: React.FC<ProjectPros> = ({ title, desc, img, technologies }) => {
    return (
        <div className="project">
            <div className="project-desc">
                <h3>{title}</h3>
                <p>{desc}</p>
                <ul>
                    {technologies.map((name) => (
                        <li key={name}> {name} </li>
                    ))}
                </ul>
                <ul>
                    <li>
                        <a href="/">GitHub</a>
                    </li>
                    <li>
                        <a href="/">Live</a>
                    </li>
                </ul>
            </div>
            <div className="project-img">
                <img src={img} alt="about - adrianfrackowiak" />
            </div>
        </div>
    );
};

export default Project;
